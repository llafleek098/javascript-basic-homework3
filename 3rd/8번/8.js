const 튜터님들 = [
  {
    이름: "예병수",
    나이: 20,
    성별: "남",
    직업: "튜터",
    담당반: "A",
  },
  {
    이름: "류제천",
    나이: 21,
    성별: "남",
    직업: "튜터",
    담당반: "A",
  },
  {
    이름: "최원장",
    나이: 22,
    성별: "남",
    직업: "튜터",
    담당반: "B",
  },
  {
    이름: "이재상",
    나이: 17,
    성별: "남",
    직업: "튜터",
    담당반: "B",
  },
];

튜터님들.forEach(function (result) {
  console.log(result.이름 + "님의 담당반은 " + result.담당반 + "입니다.");
});
