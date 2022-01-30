export type TitleMessageType = {
  title: string;
  description: string;
  button: string | boolean;
  allowBack: boolean;
};

export const SignupTitleMessages: TitleMessageType[] = [
  {
    title: "Zzic9가 처음이신가요?",
    description: "약관에 동의하시고 Zzic9를 이용해보세요!",
    button: "학교 계정 인증하기",
    allowBack: true,
  },
  {
    title: "",
    description: "",
    button: false,
    allowBack: false,
  },
];
