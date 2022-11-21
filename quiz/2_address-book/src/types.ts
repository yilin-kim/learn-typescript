interface PhoneNumberDictionary {
    // 어떤 키가 올지 모르기 때문에 index signature를 사용한다.
    [phone: string]: {
      num: number;
    };
  }
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }
  
enum PhoneType {
    Home = "home",
    Office = "office",
    Studio = "studio",
  }

export { PhoneNumberDictionary, Contact, PhoneType };