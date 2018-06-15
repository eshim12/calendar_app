import moment from 'moment';

export default [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: moment('2018-6-12').format(),
    end: moment('2018-6-15').format(),
  },
  {
    id: 1,
    title: 'Long Event',
    start: moment('2018-6-7').format(),
    end: moment('2018-6-10').format(),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: moment('2018-6-10').format(),
    end: moment('2018-6-11').format(),
  },

  // {
  //   id: 3,
  //   title: 'DTS ENDS',
  //   start: moment('2018-6-6').format(),
  //   end: moment('2018-6-13').format(),
  // },

  // {
  //   id: 4,
  //   title: 'Some Event',
  //   start: moment('2018-5-9').format(),
  //   end: moment('2018-5-9').format(),
  // },
  // {
  //   id: 5,
  //   title: 'Conference',
  //   start: moment('2018-5-11').format(),
  //   end: moment('2018-5-13').format(),
  //   desc: 'Big conference for important people',
  // },
  // {
  //   id: 6,
  //   title: 'Meeting',
  //   start: moment('2018-6-12').format(),
  //   end: moment('2018-6-12').format(),
  //   desc: 'Pre-meeting meeting, to prepare for the meeting',
  // }
]
