import {
  UilWindsock ,
    UilClockTen,
    UilHeartRate 
} from '@iconscout/react-unicons'

export const TarjetasData = [
    {
      title: "Caminar",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 50,
      value: "401 metros",
      png: UilHeartRate ,
      series: [
        {
          name: "Metros",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Meditacion",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "1,440 minutos",
      png: UilClockTen ,
      series: [
        {
          name: "Minutos",
          data: [150, 250, 205, 150, 200, 70, 415],
        },
      ],
    },
    {
      title: "Ciclismo",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 40,
      value: "4,360 metros",
      png: UilWindsock ,
      series: [
        {
          name: "Metros",
          data: [400, 510, 550, 600, 600, 750, 950],
        },
      ],
    },
  ]