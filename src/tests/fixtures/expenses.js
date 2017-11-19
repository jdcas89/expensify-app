import moment from 'moment'
export default  [
  {
    id:'1',
    description: 'Gum',
    note:'Biology',
    amount:195,
    createdAt: 0
  },
  {
    id:'2',
    description: 'Rent',
    note:'September',
    amount:3000,
    createdAt: moment(0).subtract(4, 'day').valueOf()
  },
  {
    id:'3',
    description: 'Credit card',
    note:'',
    amount:4000,
    createdAt: moment(0).add(4, 'day').valueOf()
  }
]