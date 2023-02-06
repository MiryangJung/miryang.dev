type tContent = {
  title: string;
  description: string;
  do: string[];
  tech: string[];
  techHighlight: string[];
  link: string | null;
};

type tExperience = {
  company: string;
  position: string;
  period: string;
  content: tContent[];
};

type tOthertExperience = {
  name: string;
  content: { title: string; url: string | null }[];
};

type tResume = {
  name: string;
  job: string;
  contact: string;
  about: string[];
  experience: tExperience[];
  otherExperience: tOthertExperience[];
  presentation: tOthertExperience[];
};

const resume: tResume = {
  name: '정미량',
  job: 'Frontend Engineer',
  contact: 'Email: miryang.dev@gmail.com',
  about: [
    '개발자로 스타트업에서 프론트엔드 개발을 하고 있습니다.',
    '개발 중 마주친 문제를 해결하기 위해 최대한의 노력을 하며, 시간이 걸리더라도 공부를 합니다.',
    '기술 스택을 늘리고, 레벨을 높이기 위해 공부하는 것을 즐기며, 이 과정에서 알게 된 정보를 공유하는 것을 좋아합니다.',
    '대화하는 것을 좋아해 사용자와 소통을 할 수 있는 프론트엔드의 매력에 빠졌습니다.',
    '의견 충돌을 피하기보다, 의견을 나누고, 토론하는 것을 좋아하며 이를 통해 좋은 결과물을 만들어내는 환경 그리고 ',
    '사용자의 입장에서 생각하며, 제품에 애착을 가지고 기여할 수 있는 환경에서 일하고 싶습니다.'
  ],
  experience: [
    {
      company: '그린랩스',
      position: 'Frontend Engineer',
      period: '22.02 ~ ',
      content: [
        {
          title: '팜모닝',
          description:
            '농업에 종사하는 모든 사람들을 위한 커뮤니티 서비스입니다.',
          do: [
            '영농 작업 상황 및 장부 입력을 쉽게 도와주는 서비스인 영농 일지 & 영농 장부 개발',
            '기존 코드를 모듈화하며, 홈개편 작업 시행',
            '웹뷰 사용 및 외부 SDK 연동을 위한 React Native 개발'
          ],
          tech: ['Tailwind', 'Git'],
          techHighlight: [
            'ReScript',
            'Relay',
            'React',
            'Next.js',
            'React Native'
          ],
          link: 'https://play.google.com/store/apps/details?id=com.greenlabs.smartfarm&hl=ko'
        },
        {
          title: 'Farmmy',
          description: '팜모닝의 리뉴얼 및 글로벌 서비스입니다.',
          do: [
            '앱 기능을 웹뷰에서 사용하기 위한 연동 작업',
            '자연스러운 UX를 위한 웹뷰 네비게이션 개선 작업',
            'AppCenter를 사용한 테스터 관리 및 앱 배포'
          ],
          tech: ['AppCenter', 'Git'],
          techHighlight: ['ReScript', 'React Native', 'Next.js'],
          link: 'https://play.google.com/store/apps/details?id=com.farmmy.app&hl=ko&gl=US'
        }
      ]
    },
    {
      company: '외주',
      position: 'Project Manager & Frontend Engineer',
      period: '21.09 ~ 21.12',
      content: [
        {
          title: '인강 코어',
          description:
            '16가지의 학생 유형과 8가지의 강사 유형을 분석 및 매칭해주는 플랫폼으로 커뮤니티와 인강관리 서비스가 포함되어있습니다.',
          do: [
            '매주 회의에 참가하며, 전체적인 프로젝트 매니징',
            'Styled Component를 사용해 컴포넌트 재사용',
            '모바일, 테블릿까지 대응한 반응형',
            '모바일 앱 웹뷰와 통신',
            'AWS의 S3를 사용한 정적 배포'
          ],
          tech: [
            'Typescript',
            'TSX',
            'Git',
            'Github',
            'CSS',
            'AWS',
            'ESLint',
            'Prettier'
          ],
          techHighlight: ['React', 'Emotion', 'Redux'],
          link: null
        },
        {
          title: '플러스알파고',
          description: '코인 자동매매 프로그램 홍보 페이지입니다.',
          do: [
            '모바일, 테블릿까지 대응한 반응형',
            'Styled Component를 사용헤 컴포넌트 재사용'
          ],
          tech: [
            'Typescript',
            'TSX',
            'Git',
            'Github',
            'CSS',
            'Redux',
            'ESLint',
            'Prettier'
          ],
          techHighlight: ['React', 'Emotion'],
          link: null
        }
      ]
    },
    {
      company: '라온스토리',
      position: 'FullStack Engineer',
      period: '21.06 ~ 21.11',
      content: [
        {
          title: 'Hypercerts Home',
          description: '하이퍼서트 공식홈페이지입니다.',
          do: [],
          tech: ['Typescript', 'TSX', 'CRA', 'Git', 'Redux'],
          techHighlight: ['React', 'Emotion'],
          link: 'https://www.hypercerts.com'
        },
        {
          title: 'HCT POC',
          description:
            '블록체인(하이퍼레저 INDY)을 이용한 신원 증명 프로젝트로 ' +
            '하이퍼레저 ARIES를 이용한 STEWERD API를 작성했습니다.',
          do: [
            '하이퍼레저 ARIES 로 INDY 원장 연결 및 에이전트 작성',
            '앱을 위한 Mediator 작성',
            'Express.js 로 API 작성 및 Swagger 작성'
          ],
          tech: ['Node.js', 'Express.js', 'Typescript', 'Swagger'],
          techHighlight: ['Aries Framework'],
          link: null
        },
        {
          title: 'QIS',
          description:
            '역학조사에 기반한 자동화된 방역 시스템입니다. 총 4개의 서버리스 리액트를 개발했습니다.',
          do: ['CSS 작성 시 BEM 방식을 차용하여 사용', 'i18n 으로 국제화 작업'],
          tech: ['Typescript', 'TSX', 'Git', 'Github', 'CSS'],
          techHighlight: ['React'],
          link: 'https://qisys.io'
        },
        {
          title: 'Qart.art',
          description:
            'QR코드와 블록체인을 이용하여 운영되는 작품 거래 사이트로 프론트엔드를 리팩토링했습니다.' +
            '기존에 이미 개발된 프론트엔드의 잦은 레이아웃 깨짐 현상 및 버그 수정하기 위해 진행되었습니다.',
          do: [
            '기존 프론트엔드 코드 분석 및 파악',
            '기존 1000줄이 넘는 파일들을 분리하며 개발',
            '웹접근성을 준수하여 개발'
          ],
          tech: ['JSP', 'CSS', 'AJAX', 'Git'],
          techHighlight: ['Javascript'],
          link: null
        }
      ]
    },
    {
      company: 'AiRISS',
      position: 'FullStack Engineer',
      period: '20.04 ~ 21.05',
      content: [
        {
          title: '관세청 AIXAC Portal',
          description:
            'AIXAC 시스템의 데이터베이스 및 그래프를 보여주고,' +
            '서버의 성능을 모니터링하는 화면을 설계 및 개발했습니다.',
          do: [
            '라이브러리를 사용하지 않고, 페이징 기능이 있는 테이블 구현',
            '파일 다운로드 시 스트림을 이용하여 프로그레스바 구현',
            '실시간 서버 성능 관제용 화면 설계, 디자인 및 개발',
            '웹접근성을 준수하여 개발'
          ],
          tech: ['JSP', 'CSS', 'tui-chart', 'jQuery', 'AJAX', 'Git'],
          techHighlight: ['Javascript'],
          link: 'https://blog.naver.com/k_customs/221835330899'
        },
        {
          title: '화물 판독 및 AI 식별용 뷰어',
          description:
            '인천특송물류센터, 인천항, 평택항에서 판독관들이 보는 AI 식별용 뷰 화면을 개발했습니다.',
          do: [
            '웹소켓으로 실시간 데이터 전송 구현',
            '뷰어 화면 디자인 및 설계 및 개발',
            'AI가 식별한 물품의 바운딩 박스를 이미지에 그리기 구현'
          ],
          tech: ['HTML', 'CSS', 'Javascript'],
          techHighlight: ['Go', 'echo'],
          link: null
        },
        {
          title: '개발용 시뮬레이터',
          description:
            '폐쇄망에 설치되는 SW의 개발을 위해 해당 환경의 시스템 흐름과 유사하게 작동되도록 시뮬레이터를 개발하였습니다.',
          do: [
            '작동시 값을 쉽게 설정할 수 있도록 웹으로 개발',
            'MSSQL 데이터 삽입, TCP 통신, 파일 생성의 흐름을 구현',
            '기존에 Node.js로 개발했으나 유지보수를 위해 Flask로 전환'
          ],
          tech: [
            'Javascript',
            'Express.js',
            'HTML',
            'CSS',
            'Python',
            'MSSQL',
            'Git'
          ],
          techHighlight: ['Flask', 'Node.js'],
          link: null
        },
        {
          title: '기존 AIXAC 시스템 재설계',
          description:
            '기존 C#으로 개발된 SW의 잦은 문제 발생을 해결하기 위해 재설계를 제안했고, AI 엔진과의 호환성을 위해 언어를 파이썬으로 변경 후 진행했습니다.',
          do: [
            '기존 시스템의 설계, 구조 및 데이터 흐름 파악',
            '재설계 초기의 개발 방향 제시 (이후 팀리더 영입)'
          ],
          tech: [],
          techHighlight: [],
          link: null
        }
      ]
    },
    {
      company: 'IGLOO SECURITY',
      position: 'Consulting Intern',
      period: '19.08 ~ 20.02',
      content: [
        {
          title: '나라장터 메일링',
          description:
            '나라장터 API를 이용해 특정 키워드의 공고를 목록화 후 1시간마다 메일로 전송하는 서비스를 개발했습니다.',
          do: ['나라장터 API 사용'],
          tech: ['Javascript'],
          techHighlight: ['Node.js'],
          link: null
        },
        {
          title: '엑셀 보고서 자동화',
          description:
            '점검도구를 실행 결과로 생성되는 txt 파일을 취약점 보안점검 결과보고서 (MS Excel)에 자동으로 채워주는 매크로를 작성했습니다.',
          do: ['VBA를 사용한 매크로 작성'],
          tech: ['Excel'],
          techHighlight: ['VBA'],
          link: null
        },
        {
          title: '웹 취약점 이행 점검',
          description:
            '주요정보통신기반시설 취약점 점검 가이드를 참고해 웹 취약점 이행 점검을 도왔습니다.',
          do: ['점검 대상 웹의 .js 파일을 읽어 흐름 파악'],
          tech: ['HTML'],
          techHighlight: ['Burp Suite'],
          link: null
        }
      ]
    }
  ],
  otherExperience: [
    {
      name: '2021 오픈소스 컨트리뷰션',
      content: [
        {
          title: 'React Analytics Provider',
          url: 'https://github.com/EveryAnalytics'
        },
        {
          title: 'https://github.com/react-ga/react-ga 의 util 분석',
          url: 'https://miryang.notion.site/react-ga-util-0399d64a0c1747f1b4c2b292d8a0d994'
        },
        {
          title: 'why-ga 블로그 글 문서 작성',
          url: 'https://github.com/EveryAnalytics/web-analytics-handbook/pull/64'
        },
        {
          title:
            '기존에 package.json 에 명시된 jest config 를 jest.config.js 로 분리',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/92'
        },
        {
          title: 'production 일 때 console.log 등이 안 보이도록 조치',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/93'
        },
        {
          title: '중복된 타입 적용',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/152'
        },
        {
          title: 'set test 추가',
          url: 'https://github.com/EveryAnalytics/react-analytics-provider/pull/173'
        }
      ]
    },
    {
      name: 'XXIT 커뮤니티',
      content: [
        {
          title: 'techtalk 행사 공식 페이지 개발',
          url: 'https://github.com/XXIT-Official/2019-xxit-tech-talk'
        },
        {
          title: 'TomeFromme 기획 및 개발',
          url: 'https://github.com/XXIT-Official/TomeFromme'
        }
      ]
    },
    {
      name: '자격증',
      content: [
        {
          title: 'ISO 27001 Lead Auditor Course',
          url: null
        },
        {
          title: '리눅스마스터 2급',
          url: null
        }
      ]
    }
  ],
  presentation: [
    {
      name: '자격증',
      content: [
        {
          title: 'ISO 27001 Lead Auditor Course',
          url: null
        },
        {
          title: '리눅스마스터 2급',
          url: null
        }
      ]
    }
  ]
};

export default resume;
