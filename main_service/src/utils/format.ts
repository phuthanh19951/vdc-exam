export class Format {
  static sort(sortQuery: Array<string> | string, sortColumns: Array<string>) {
      const sortArr = Array.isArray(sortQuery) ? sortQuery : [sortQuery];
      const sortObj: any = {};
      sortArr.forEach((s) => {
          const [column, order] = s.split(':');
          if (sortColumns.includes(column)) {
              let orderValue = order;
              if (!orderValue || orderValue.toUpperCase() !== 'ASC' && orderValue.toLocaleUpperCase() !== 'DESC') {
                  orderValue = 'ASC';
              }
              sortObj[column.toString()] = orderValue.toUpperCase();
          }
      });
      return sortObj;
  }
}