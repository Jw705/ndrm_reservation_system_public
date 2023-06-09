# 남도레미 악기연습실 예약 시스템 (공개버전)

원래 사용중인 repository는 페이지 내부에 개인정보가 포함된 관계로 비공개합니다.
현재 repository는 원래 repository의 커밋 내용이 반영되지 않았습니다.

- - -

사용 스택 : Node.js, Express, JS

- - -

업데이트 내역

- 1.00  22.09.04  
    - First release

- 1.01  22.09.04  
    - 운영시간 안내문 수정 (08~24에서 08~22)

- 1.02  22.09.05  
    - FIX Daycheck Error in resv/check 

- 1.03  22.12.26  
    - 예약내역 없을때 예약내역 조회시 안내 메세지 추가
    - (***님의 예약 내역이 없습니다 메세지)

- 1.04 23.03.31
    - 달력 nextCalendar() 오류 수정
        - 오류 : 매달 마지막 날, 달력의 다음 달 버튼을 누르면 2달 뒤로 이동 
        - 수정 : nextCalendar 클릭시 nowMonth의 Date값을 1로 수정

- 1.05 23.03.31
    - 관리자 페이지 달력 nextCalendar() 오류 수정
        - 1.04 수정내역과 동일
    - 관리자 페이지 접근 가능 기간 변경
        - 이전 : 22-12-31
        - 수정 : 23-08-23 (호스팅 만료알)
    - 관리자 페이지에 버전 정보 표시