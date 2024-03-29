export const OverridedReactSelectStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'var(--dark-background-color)',
    border: 'none',
    height: '3rem'
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--white-color)'
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: 'var(--dark-background-color)',
    color: 'var(--primary-color)'
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? 'var(--dark-background-color)' : 'var(--primary-color)',
    backgroundColor: state.isFocused ? 'var(--primary-color)' : 'var(--dark-background-color)'
  })
};