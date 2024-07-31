const question18String = "hata yapmamış bir insan, yeni bir şey denememiştir.";

const question19List = [
  10, 24, 52, 32, 6, 26, 45, 26, 60, 22, 1, 66, 59, 90, 86, 11, 92, 52, 54, 19,
  28, 69, 59, 71,
];

const question20Object = { ad: "Faruk", soyad: "YEL", sehir: "Bursa" };

const questionObjs = [
  {
    question:
      "Verilen iki sayının toplamını döndüren fonksiyonu yazın. Sayılar sadece 100’den büyükse program çalışır.",
    answer: question1(240, 480),
  },
  {
    question: "100’den 0’a kadar olan sayıların 5’er 5’er yazdıran programı",
    answer: question2(),
  },
  {
    question: "1’den 50’ye kadar olan çift sayıları while döngüsü ile",
    answer: question3(),
  },
  {
    question:
      "Net fiyat olarak girilen değerin, kdv dahil fiyatını hesaplayan fonksiyonu",
    answer: question4(511),
  },
  {
    question:
      "Bir sayının diğer sayıya tam bölünüp bölünmediğini söyleyen fonksiyonu yazın.",
    answer: question5(105, 20),
  },
  {
    question:
      "Bir dizinin elemanlarının türünün integer olup olmadığını kontrol eden fonksiyonu yazın.",
    answer: question6([232, 54, 43.2]),
  },
  {
    question:
      "Dairenin çevresini hesaplayan fonksiyonu yazın. Pi parametresi girilmez ise varsayılan olarak değeri 3.14 alınacak.",
    answer: question7(5),
  },
  {
    question:
      "Verilen iki sayı arasında 5’e bölünebilen sayıları bir dizi olarak geri döndüren fonksiyonu yazın.",
    answer: question8(1, 60),
  },
  {
    question: "Bir dizi içerisindeki en büyük sayıyı bulan fonksiyonu yazınız.",
    answer: question9([43, 54, 75, 43, 64, 42, 102, 54]),
  },
  {
    question:
      "100’e kadar olan sayıların arasındaki 3 veya 5’in katı olanları bularak toplayan çözümü ve programı yazınız.",
    answer: question10(),
  },
  {
    question:
      "1’den 100’e kadar sayıların karelerini, kareköklerini, küplerini ekrana yazdıran programı yazınız.",
    answer: question11(),
  },
  {
    question:
      "120 ile 720 arasındaki sayıların ortalamasını hesaplayan programı yazınız.",
    answer: question12(),
  },
  {
    question:
      "Girilen sayının negatif, pozitif veya sıfır olduğunu gösteren programı yazınız.",
    answer: question13(0),
  },
  {
    question:
      "Girilen sayının tek yada çift olduğunu bulup uygun mesajı görüntüleyen programı yazınız.",
    answer: question14(9),
  },
  {
    question:
      "100 ile 1000 arasında rastgele 10 tam sayı üreterek bir dizi oluşturup, dizinin elemanlarını ekrana basan programı yazınız.",
    answer: question15(),
  },
  {
    question:
      "20 elemanlı rastgele çift basamaklı tamsayılardan oluşturulmuş bir dizinin, çift sayılı elemanlarının toplamının, tek sayılı elemanlarına bölüm oranını hesaplayan bir program yazınız.",
    answer: question16(),
  },
  {
    question:
      "Verilen iki sayının, belirtilen dört işlem türüne göre (toplama, çıkarma, çarpma, bölge) hesaplamasını yapıp döndüren fonksiyonu yazınız.",
    answer: question17(3, 5, "/"),
  },
  {
    question: "Verilen cümlenin baş harflerini büyük yapan programı yazınız.",
    answer: question18a(),
  },
  {
    question:
      "Verilen cümlenin kaç karakter olduğunu söyleyen programı yazınız.",
    answer: question18b(),
  },
  {
    question:
      "Verilen cümlenin sadece ilk 20 karakterini gösteren programı yazınız.",
    answer: question18c(),
  },
  {
    question:
      "Verilen cümlede “dünya” kelimesinin olup olmadığını sorgulayan programı yazınız.",
    answer: question18d(),
  },
  {
    question:
      "Verilen cümlede “insan” kelimesini “hayvan” kelimesi ile değiştiren programı yazınız.",
    answer: question18e(),
  },
  {
    question: "Verilen cümleyi 3 defa yazdıran programı yazınız.",
    answer: question18f(),
  },
  {
    question: "Verilen cümlenin kelimeleri ile bir dizi oluşturunuz.",
    answer: question18g(),
  },
  {
    question: "Verilen dizinin en büyük sayısını bulan programı yazınız.",
    answer: question19a(),
  },
  {
    question: "Verilen dizinin kaç elemanlı olduğunu bulan programı yazınız.",
    answer: question19b(),
  },
  {
    question:
      "Verilen dizideki tekrar eden elemanları silerek, yeni eleman sayısını ekrana basan programı yazınız.",
    answer: question19c(),
  },
  {
    question:
      "Verilen dizinin çift tamsayı olanlarının ortalamasını hesaplayan programı yazınız.",
    answer: question19d(),
  },
  {
    question:
      "Verilen dizinin 20 ile 80 arasındaki sayılarının en büyüğünü bulan programı yazınız.",
    answer: question19e(),
  },
  {
    question:
      "Verilen dizinin 3’e tam bölünebilen sayılardan oluşan yeni bir dizi oluşturan programı yazınız.",
    answer: question19f(),
  },
  {
    question: "Verilen dizinin ortalamasını bulunuz.",
    answer: question19g(),
  },
  {
    question: "Verilen dizinin ilk elemanını döndüren programı yazınız.",
    answer: question19h(),
  },
  {
    question: "Verilen diziyi 3 elemanlı başka bir dizi ile birleştiriniz.",
    answer: question19i(),
  },
  {
    question:
      "Verilen diziyi küçükten büyüğe sıralayıp döndüren programı yazınız.",
    answer: question19j(),
  },
  {
    question:
      "Verilen dizinin elemanlarını karıştırıp ekrana basan programı yazınız",
    answer: question19k(),
  },
  {
    question:
      "Verilen dizinin key ve value’lerini karşılıklı ekrana basan programı yazınız ( Ad: Faruk)",
    answer: question20a(),
  },
  {
    question:
      "Verilen dizide sadece şehir bilgisini ekrana basan programı yazınız.",
    answer: question20b(),
  },
  {
    question:
      "Verilen dizideki ad ve soyadı değerlerini değiştirip yeni diziyi ekrana basan programı yazınız.",
    answer: question20c(),
  },
  {
    question:
      "Verilen diziye yaş verisini ekleyip ekrana basan programı yazınız.",
    answer: question20d(),
  },
  {
    question:
      "Verilen dizide okul verisinin olup olmadığını sorgulayan programı yazınız.",
    answer: question20e(),
  },
];

function createQuestion(index, questionObj) {
  const questionDiv = document.createElement("div");
  const questionTitle = document.createElement("h1");
  const showAnswerBtn = document.createElement("button");
  const answerPre = document.createElement("pre");
  questionDiv.classList.add("question");
  answerPre.classList.add("hidden");

  showAnswerBtn.textContent = "Cevabı Göster";
  answerPre.textContent = questionObj.answer;

  showAnswerBtn.addEventListener("click", () => {
    answerPre.classList.toggle("hidden");

    if (answerPre.classList.contains("hidden")) {
      showAnswerBtn.textContent = "Cevabı Göster";
    } else {
      showAnswerBtn.textContent = "Cevabı Sakla";
    }
  });

  questionDiv.appendChild(questionTitle);
  questionDiv.appendChild(showAnswerBtn);
  questionDiv.appendChild(answerPre);

  questionTitle.textContent = ` ${index + 1}. ${questionObj.question}`;
  document.body.appendChild(questionDiv);
}

function question1(num1, num2) {
  return num1 > 100 && num2 > 100 && num1 + num2;
}

function question2() {
  let answer = "";
  for (let i = 100; i > -1; i -= 5) {
    answer += i;
    if (i > 0) {
      answer += " ";
    }
  }
  return answer;
}

function question3() {
  let answer = "";
  let x = 2;
  while (x < 50) {
    answer += x;
    answer += " ";
    x += 2;
  }
  return answer;
}

function question4(price) {
  return ((price * 120) / 100).toFixed(2);
}

function question5(divided, divider) {
  return divided % divider === 0;
}

function question6(numArr) {
  for (const num of numArr) {
    if (!Number.isInteger(num)) {
      return `${num} tam sayı değildir`;
    }
  }
  return "Bütün sayılar tam sayı";
}

function question7(r, pi = 3.14) {
  return 2 * r * pi;
}

function question8(first, second) {
  let answer = [];

  if (first >= second) {
    return;
  } else {
    for (let i = first; i < second; i++) {
      i % 5 === 0 && answer.push(i);
    }
  }
  return answer;
}

function question9(numList) {
  const max = numList.reduce((acc, num) => Math.max(acc, num));
  return max;
}

function question10() {
  let answer = 0;
  for (let i = 0; i < 100; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      answer += i;
    }
  }
  return answer;
}

function question11() {
  let answer = `Sayı\tKare\tKarekök\tKüp\n`;

  for (let i = 0; i < 101; i++) {
    answer += `${i}\t${i * i}\t${Math.sqrt(i).toFixed(3)}\t${i * i * i}\n`;
  }

  return answer;
}

function question12() {
  let sum = 0;
  for (let i = 120; i < 721; i++) {
    sum += i;
  }

  return sum / 600;
}

function question13(num) {
  if (num > 0) {
    return "Pozitif";
  } else if (num < 0) {
    return "Negatif";
  } else {
    return "Sıfır";
  }
}

function question14(num) {
  return num % 2 === 0 ? "Çift" : "Tek";
}

function question15() {
  const answer = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 900 + 100)
  );
  return answer;
}

function question16() {
  let evenSum = 0;
  let oddSum = 0;

  const numList = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 89 + 10)
  );

  numList.forEach((num) => {
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  });

  return evenSum / oddSum;
}

function question17(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "tanımlanmamış operatör";
  }
}

function question18a() {
  const words = question18String.split(" ");
  const upperCaseWords = words.map(
    (word) => word.substring(0, 1).toUpperCase() + word.substring(1)
  );
  return upperCaseWords.join(" ");
}

function question18b() {
  return question18String.length;
}

function question18c() {
  return question18String.substring(0, 20);
}

function question18d() {
  return question18String.includes("dünya");
}

function question18e() {
  if (question18String.includes("insan")) {
    return question18String.replace("insan", "hayvan");
  }
}

function question18f() {
  let answerString = "";
  for (let i = 0; i < 3; i++) {
    answerString += `${question18String}\n`;
  }
  return answerString;
}

function question18g() {
  return question18String.replace(".", "").replace(",", "").split(" ");
}

function question19a() {
  return Math.max(...question19List);
}

function question19b() {
  return question19List.length;
}

function question19c() {
  return Array.from(new Set(question19List)).length;
}

function question19d() {
  const evenNums = question19List.filter((num) => num % 2 === 0);
  const sum = evenNums.reduce((acc, num) => acc + num, 0);
  return sum / evenNums.length;
}

function question19e() {
  const filteredArray = question19List.filter((num) => num > 20 && num < 80);
  return Math.max(...filteredArray);
}

function question19f() {
  return question19List.filter((num) => num % 3 === 0);
}

function question19g() {
  const sum = question19List.reduce((acc, num) => acc + num, 0);
  return sum / question19List.length;
}

function question19h() {
  return question19List[0];
}

function question19i() {
  return question19List.concat([34, 65, 767]);
}
function question19j() {
  return question19List.sort();
}
function question19k() {
  const randomizedArray = question19List;

  for (let i = question19List.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = randomizedArray[i];
    randomizedArray[i] = randomizedArray[randomIndex];
    randomizedArray[randomIndex] = temp;
  }

  return randomizedArray;
}

function question20a() {
  let answerString = "";
  for (const [key, value] of Object.entries(question20Object)) {
    answerString += `${key} : ${value}\n`;
  }

  return answerString;
}

function question20b() {
  return question20Object.sehir;
}

function question20c() {
  const copyObj = question20Object;
  const temp = copyObj.ad;
  copyObj.ad = copyObj.soyad;
  copyObj.soyad = temp;

  let answerString = "";
  for (const [key, value] of Object.entries(copyObj)) {
    answerString += `${key} : ${value}\n`;
  }

  return answerString;
}

function question20d() {
  const updatedObj = question20Object;
  updatedObj.yas = 34;

  let answerString = "";
  for (const [key, value] of Object.entries(updatedObj)) {
    answerString += `${key} : ${value}\n`;
  }

  return answerString;
}

function question20e() {
  return "okul" in question20Object;
}

questionObjs.forEach((item, index) => {
  createQuestion(index, item);
});
