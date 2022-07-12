import 'styled-components';

// 공동 스타일 속성 interface 샘플
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      border: string;
      subTitle: string;
      discount: string;
    };
  }
}
