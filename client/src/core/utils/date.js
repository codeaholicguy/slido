import moment from 'moment'

export function format(date) {
  return moment(date).format('HH:MM DD/MM/YYYY')
}
