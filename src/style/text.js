const base = {
  color: '#000',
  fontSize: '',
  fontWeight: '400', //100-900
  // lineHeight: '',
  fontStyle: 'normal', //normal, italic
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const weight = {
  ultrabold: '900',
  bold: '700',
  demibold: '500',
  medium: '400',
  slim: '200',
  wire: '100',
}

export default {
  large_title: {
    ...base,
    fontSize: '33px',
    fontWeight: weight.bold,
    // lineHeight: '45',
  },
  title_1: {
    ...base,
    fontSize: '29px',
    fontWeight: weight.demibold,
    // lineHeight: '40',
  },
  title_2: {
    ...base,
    fontSize: '25px',
    fontWeight: weight.demibold,
    // lineHeight: '34',
  },
  title_3: {
    ...base,
    fontSize: '20px',
    fontWeight: weight.medium,
    // lineHeight: '27',
  },
  headline: {
    ...base,
    fontSize: '20px',
    fontWeight: weight.demibold,
    // lineHeight: '27',
  },
  body: {
    ...base,
    fontSize: '17px',
    fontWeight: weight.medium,
    // lineHeight: '23',
  },
  callout: {
    ...base,
    fontSize: '16px',
    fontWeight: weight.demibold,
    // lineHeight: '22',
  },
  subhead: {
    ...base,
    fontSize: '15px',
    fontWeight: weight.medium,
    // lineHeight: '20',
  },
  footnote: {
    ...base,
    fontSize: '13px',
    fontWeight: weight.demibold,
    // lineHeight: '15',
  },
  caption_1: {
    ...base,
    fontSize: '12px',
    fontWeight: weight.medium,
    // lineHeight: '14',
  },
  caption_2: {
    ...base,
    fontSize: '11px',
    fontWeight: weight.medium,
    // lineHeight: '15',
  },
}
