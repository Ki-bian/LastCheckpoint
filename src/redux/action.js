// eslint-disable-next-line import/prefer-default-export
export function mapDispatchToProps(value, type) {
  switch (type) {
    case 'bottomNav':
      return {
        type: 'HANDLE_BOTTOM_NAV',
        payload: value,
      };
    case 'remove':
      return {
        type: 'HANDLE_REMOVE',
        payload: value,
      };
    case 'add':
      return {
        type: 'HANDLE_ADD',
        payload: value,
      };


    default: return null;
  }
}
