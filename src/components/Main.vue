<script>
  import { hero_img, insta_logo, insta_icon, default_banner, dummy_1, dummy_2, dummy_3, dummy_4, dummy_5, dummy_6, dummy_7, dummy_8 } from './Reference';

  const dummy = [
    { id: 1, image: hero_img, insta_id: 'illiilliil', insta_content: '바다와 함께하는 작은 발견. 비치코밍의 기쁨! \n#비치코밍 #해변의보물 #자연과함께' },
    { id: 2, image: default_banner, insta_id: 'hyo_o', insta_content: '플로깅은 운동이자 환경 보호! 오늘도 성공적! \n#플로깅챌린지 #조깅과환경보호' },
    { id: 3, image: dummy_1, insta_id: 'beach_combing', insta_content: '해변에서 발견한 쓰레기들. 나의 작은 노력으로 깨끗한 바다를 \n#비치코밍 #바다를지켜요' },
    { id: 4, image: dummy_2, insta_id: 'iris_0502', insta_content: 'Your personal environmental campaign! Small actions, significant changes for the earth. 💚 \n#PloggingMovement #FitPlanet' },
    { id: 5, image: dummy_3, insta_id: 'cheery_y_23', insta_content: 'Clean up as you work out with plogging! Every step counts towards a greener earth. 💪🌎 \n#PloggingForThePlanet #StepsTowardsChange' },
    { id: 6, image: dummy_4, insta_id: 'x_x__y21', insta_content: '플로깅으로 두 마리 토끼 잡기: 건강도 챙기고 환경도 지키기 \n#플로깅운동 #환경보호' },
    { id: 7, image: dummy_5, insta_id: 'jisoo_03', insta_content: 'Where fitness meets environmental care! Boost your health + Save the planet = 🍀 \n#PloggingBenefits #HealthMeetsEco' },
    { id: 8, image: dummy_6, insta_id: 'sang_hyun_25', insta_content: '가족과 함께하는 비치코밍의 특별한 순간! 바다의 보물을 찾는 우리 가족의 작은 모험. 🐚 \n#FamilyBeachDay #TreasuresInTheSand' },
    { id: 9, image: dummy_7, insta_id: 'pocarisweat', insta_content: '비치코밍 키트 증정 이벤트! 🎉 여름의 기억을 바다에서 찾아보세요. 증정 키트로 시작해보는 비치코밍, 어떠세요? 참여 방법은 프로필 링크 클릭! \n#비치코밍시작 #여름의기억' },
    { id: 10, image: dummy_8, insta_id: 'haeundae_beach_combing', insta_content: '🏖️🚯 바다를 사랑하는 우리, 오늘도 비치코밍으로 깨끗한 해변 만들기 \n#비치코밍 #해변을지키자' },
  ]

  export default {
    data() {
      return {
        hero_img,
        insta_icon,
        insta_logo,
        default_banner,
        dummy,
        dummy_1,
        dummy_2,
        dummy_3,
        dummy_4,
        dummy_5,
        dummy_6,
        dummy_7,
        dummy_8,
      }
    }
  }
</script>

<template>
  <div >
      <div>
        <div>
          <h1>Clean Mile</h1>
          <p>
            <span>
              {t('common:It is a community service that aims to collect information about environmental protection events in one place to improve accessibility and user-friendliness, and to encourage active participation by issuing certification badges (NFTs) to users who participate in events')}
            </span>
            <br />
            <br />
            <span>
              {t('common:The project was born out of the idea to facilitate interaction between people interested in protecting the environment, and to encourage participants to contribute to solving and improving environmental problems such as urban aesthetics, impaired drainage, loss of biodiversity, air pollution, and resource depletion')}
            </span>
          </p>
          <div >
            <button>
              {t('common:Get Started')}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img :src="insta_logo" alt='instagram logo' />
          <img :src="insta_icon" alt='instagram icon' />
        </div>
        <div>
          <p>#Plogging</p>
          <p>#BeachCombing</p>
          <p>#Garbage</p>
        </div>
        <div v-for="item in dummy" :key="item.id">
          <div>
            <div>
              <img :src="item.image" alt='insta image' />
            </div>
            <div>
              <div>
                <h2>@{{ item.insta_id }}</h2>
              </div>
              <p>
                {{ item.insta_content.length > 50 ? item.insta_content.slice(0, 50) + '...' : item.insta_content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>