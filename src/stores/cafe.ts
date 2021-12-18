import {makeVar} from '@apollo/client';

export const isClickedThemeVar = makeVar(false);
export const clickedThemeVar = makeVar('');
export const isClickedRegisterVar = makeVar(false);
//더미데이터
export const cafeListVar = makeVar([
  {
    name: '센터커피 서울숲점',
    address: '서울 성동구 서울숲2길 28-11 1층',
    location: {longitude: '37.546541849098304', latitude: '127.048963363388'},
    theme: [
      {
        themeName: '노트북 작업',
        userList: [
          {
            thumbNail:
              'https://i.pinimg.com/originals/c9/5d/e1/c95de1d83a5c23e36e3b3436229aa2d9.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/a9/1a/80/a91a80d54a299e09fe6f59e3e454e55e.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/5b/9d/15/5b9d15b5cfced121f572ef648e060215.jpg',
          },
        ],
        userCount: 20,
      },
      {
        themeName: '분위기 감성',
        userList: [
          {thumbNail: 'https://www.picture22.jpg'},
          {thumbNail: 'https://www.profile3.jpg'},
        ],
        userCount: 2,
      },
      {
        themeName: '커피 맛집',
        userList: [
          {
            thumbNail:
              'https://i.pinimg.com/originals/c9/5d/e1/c95de1d83a5c23e36e3b3436229aa2d9.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/a9/1a/80/a91a80d54a299e09fe6f59e3e454e55e.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/5b/9d/15/5b9d15b5cfced121f572ef648e060215.jpg',
          },
        ],
        userCount: 6,
      },
    ],
  },
  {
    name: '이월 커피로스터스',
    address: '서울 송파구 백제고분로45길 14',
    location: {longitude: '37.5096875273204', latitude: '127.11001081659107'},
    theme: [
      {
        themeName: '노트북 작업',
        userList: [
          {thumbNail: 'https://www.picture.jpg'},
          {thumbNail: 'https://www.profile.jpg'},
          {thumbNail: 'https://www.pic.jpg'},
        ],
        userCount: 20,
      },
      {
        themeName: '분위기 감성',
        userList: [
          {thumbNail: 'https://www.picture22.jpg'},
          {thumbNail: 'https://www.profile3.jpg'},
        ],
        userCount: 2,
      },
      {
        themeName: '커피 맛집',
        userList: [
          {
            thumbNail:
              'https://i.pinimg.com/originals/c9/5d/e1/c95de1d83a5c23e36e3b3436229aa2d9.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/a9/1a/80/a91a80d54a299e09fe6f59e3e454e55e.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/5b/9d/15/5b9d15b5cfced121f572ef648e060215.jpg',
          },
        ],
        userCount: 6,
      },
    ],
  },
  {
    name: '커피앤시가렛',
    address: '서울 중구 서소문로 116 유원빌딩 17층',
    location: {longitude: '37.56266519133771', latitude: '126.97408646014645'},
    theme: [
      {
        themeName: '노트북 작업',
        userList: [
          {thumbNail: 'https://www.picture.jpg'},
          {thumbNail: 'https://www.profile.jpg'},
          {thumbNail: 'https://www.pic.jpg'},
        ],
        userCount: 20,
      },
      {
        themeName: '분위기 감성',
        userList: [
          {thumbNail: 'https://www.picture22.jpg'},
          {thumbNail: 'https://www.profile3.jpg'},
        ],
        userCount: 2,
      },
      {
        themeName: '커피 맛집',
        userList: [
          {
            thumbNail:
              'https://i.pinimg.com/originals/c9/5d/e1/c95de1d83a5c23e36e3b3436229aa2d9.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/a9/1a/80/a91a80d54a299e09fe6f59e3e454e55e.jpg',
          },
          {
            thumbNail:
              'https://i.pinimg.com/originals/5b/9d/15/5b9d15b5cfced121f572ef648e060215.jpg',
          },
        ],
        userCount: 10,
      },
    ],
  },
]);
export const kakaoMapVar = makeVar<any>(null);
