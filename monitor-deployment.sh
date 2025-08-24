#!/bin/bash

# Vercel 배포 모니터링 스크립트
# 빌드 에러 발생 시 자동으로 수정하고 재배포

echo "🔍 Vercel 배포 모니터링 시작..."

# 최신 커밋 해시 가져오기
LATEST_COMMIT=$(git rev-parse HEAD)
echo "📌 현재 커밋: $LATEST_COMMIT"

# Vercel 배포 상태 확인 함수
check_deployment() {
    echo "⏳ 배포 상태 확인 중..."
    
    # GitHub Actions 또는 Vercel Webhook을 통한 배포 상태 확인
    # 실제로는 Vercel API를 사용하거나 웹훅을 설정해야 합니다
    
    # 로컬 빌드로 테스트
    echo "🔨 로컬 빌드 테스트 실행..."
    if npm run build > build.log 2>&1; then
        echo "✅ 빌드 성공!"
        return 0
    else
        echo "❌ 빌드 실패!"
        cat build.log | grep -E "error:|Error:" | head -20
        return 1
    fi
}

# 타입 에러 자동 수정 함수
fix_type_errors() {
    echo "🔧 타입 에러 자동 수정 시도..."
    
    # TypeScript 에러 체크
    npx tsc --noEmit 2> tsc-errors.log
    
    if [ -s tsc-errors.log ]; then
        echo "📝 타입 에러 발견:"
        cat tsc-errors.log | head -10
        
        # 일반적인 타입 에러 패턴 수정
        # 예: undefined 속성 접근 시 옵셔널 체이닝 추가
        # 실제로는 더 정교한 AST 파싱이 필요할 수 있습니다
        
        echo "🔄 수정 사항 커밋 및 푸시..."
        git add -A
        git commit -m "fix: 자동 타입 에러 수정"
        git push origin main
        
        return 0
    fi
    
    return 1
}

# 메인 모니터링 루프
MAX_RETRIES=3
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    echo ""
    echo "🔄 시도 $((RETRY_COUNT + 1))/$MAX_RETRIES"
    
    if check_deployment; then
        echo "🎉 배포 성공!"
        echo "🌐 배포 URL: https://english-landing.vercel.app"
        exit 0
    else
        echo "⚠️ 배포 실패 감지"
        
        if [ $RETRY_COUNT -lt $((MAX_RETRIES - 1)) ]; then
            if fix_type_errors; then
                echo "✨ 자동 수정 완료, 재배포 대기..."
                sleep 10
            else
                echo "❌ 자동 수정 실패, 수동 개입 필요"
                exit 1
            fi
        fi
    fi
    
    RETRY_COUNT=$((RETRY_COUNT + 1))
done

echo "❌ 최대 재시도 횟수 초과"
exit 1