// Each lesson has explanation + one exercise, in en/ur/ko.
// Exercises are simple string-match checks — no code execution needed for v1.

export const lessons = [
  {
    id: "variables",
    order: 1,
    icon: "box",
    title: { en: "Variables", ur: "متغیرات", ko: "변수" },
    explanation: {
      en: "A variable is a labeled box that holds a value. Instead of writing the number 5 everywhere, you give it a name — like `age` — and reuse that name. If the value changes, you only update it in one place.",
      ur: "متغیر ایک لیبل والا ڈبہ ہے جو ایک قدر رکھتا ہے۔ ہر جگہ نمبر 5 لکھنے کے بجائے، آپ اسے ایک نام دیتے ہیں — جیسے `age` — اور اس نام کو دوبارہ استعمال کرتے ہیں۔",
      ko: "변수는 값을 담는 라벨이 붙은 상자입니다. 숫자 5를 여러 곳에 반복해서 쓰는 대신 `age`처럼 이름을 붙이고 그 이름을 재사용합니다.",
    },
    codeExample: `age = 17\nprint(age)`,
    exercise: {
      prompt: {
        en: "Create a variable called `city` and set it equal to \"Hyderabad\". Type only the line of code.",
        ur: "`city` نامی ایک متغیر بنائیں اور اسے \"Hyderabad\" کے برابر رکھیں۔ صرف کوڈ کی لائن ٹائپ کریں۔",
        ko: "`city`라는 변수를 만들고 \"Hyderabad\"로 설정하세요. 코드 한 줄만 입력하세요.",
      },
      accept: [`city = "hyderabad"`, `city="hyderabad"`, `city = 'hyderabad'`],
    },
  },
  {
    id: "conditionals",
    order: 2,
    icon: "fork",
    title: { en: "Conditionals", ur: "شرطیہ بیانات", ko: "조건문" },
    explanation: {
      en: "Conditionals let a program make decisions. An `if` statement runs a block of code only when something is true — like checking whether a score is high enough to pass.",
      ur: "شرطیہ بیانات پروگرام کو فیصلے کرنے دیتے ہیں۔ ایک `if` بیان صرف اس وقت کوڈ چلاتا ہے جب کوئی چیز درست ہو — جیسے یہ چیک کرنا کہ اسکور پاس ہونے کے لیے کافی ہے یا نہیں۔",
      ko: "조건문은 프로그램이 결정을 내리게 합니다. `if` 문은 어떤 조건이 참일 때만 코드 블록을 실행합니다 — 예를 들어 점수가 합격선을 넘는지 확인할 때처럼요.",
    },
    codeExample: `score = 71\nif score >= 50:\n    print("pass")`,
    exercise: {
      prompt: {
        en: "Write an if statement that prints \"pass\" when `score` is at least 40.",
        ur: "ایک if بیان لکھیں جو \"pass\" پرنٹ کرے جب `score` کم از کم 40 ہو۔",
        ko: "`score`가 40 이상일 때 \"pass\"를 출력하는 if 문을 작성하세요.",
      },
      accept: [`if score >= 40:\n    print("pass")`, `if score>=40:\n    print("pass")`],
    },
  },
  {
    id: "loops",
    order: 3,
    icon: "repeat",
    title: { en: "Loops", ur: "لوپس", ko: "반복문" },
    explanation: {
      en: "A loop repeats a block of code without you writing it out by hand. A `for` loop is perfect when you know how many times to repeat — like printing five numbers in a row.",
      ur: "ایک لوپ کوڈ کے ایک بلاک کو دہراتا ہے بغیر اسے ہاتھ سے دوبارہ لکھے۔ `for` لوپ اس وقت بہترین ہے جب آپ کو معلوم ہو کہ کتنی بار دہرانا ہے۔",
      ko: "반복문은 코드를 직접 여러 번 작성하지 않고도 블록을 반복 실행합니다. `for` 반복문은 몇 번 반복할지 알고 있을 때 유용합니다.",
    },
    codeExample: `for i in range(5):\n    print(i)`,
    exercise: {
      prompt: {
        en: "Write a for loop that prints the numbers 0 through 2 (use range(3)).",
        ur: "ایک for لوپ لکھیں جو 0 سے 2 تک نمبر پرنٹ کرے (range(3) استعمال کریں)۔",
        ko: "0부터 2까지 숫자를 출력하는 for 반복문을 작성하세요 (range(3) 사용).",
      },
      accept: [`for i in range(3):\n    print(i)`],
    },
  },
  {
    id: "functions",
    order: 4,
    icon: "puzzle",
    title: { en: "Functions", ur: "فنکشنز", ko: "함수" },
    explanation: {
      en: "A function is a reusable block of code you can call by name whenever you need it, instead of retyping the same steps everywhere.",
      ur: "ایک فنکشن کوڈ کا ایک قابل استعمال بلاک ہے جسے آپ نام سے بلا سکتے ہیں جب بھی ضرورت ہو، ہر جگہ وہی مراحل دوبارہ لکھنے کے بجائے۔",
      ko: "함수는 필요할 때마다 이름으로 호출할 수 있는 재사용 가능한 코드 블록입니다. 같은 단계를 여러 번 다시 작성할 필요가 없습니다.",
    },
    codeExample: `def greet(name):\n    print("Hello, " + name)\n\ngreet("Kinzah")`,
    exercise: {
      prompt: {
        en: "Write a function called `square` that takes `n` and prints `n * n`.",
        ur: "`square` نامی ایک فنکشن لکھیں جو `n` لے اور `n * n` پرنٹ کرے۔",
        ko: "`n`을 받아 `n * n`을 출력하는 `square`라는 함수를 작성하세요.",
      },
      accept: [`def square(n):\n    print(n * n)`, `def square(n):\n    print(n*n)`],
    },
  },
  {
    id: "lists",
    order: 5,
    icon: "list",
    title: { en: "Lists", ur: "فہرستیں", ko: "리스트" },
    explanation: {
      en: "A list holds multiple values in order, like a row of labeled boxes. You can loop through a list to process every item without knowing the exact count in advance.",
      ur: "ایک فہرست ترتیب میں متعدد قدریں رکھتی ہے، جیسے لیبل والے ڈبوں کی ایک قطار۔ آپ ہر آئٹم پر عمل کرنے کے لیے فہرست میں لوپ چلا سکتے ہیں۔",
      ko: "리스트는 여러 값을 순서대로 담습니다. 정확한 개수를 몰라도 리스트를 반복하며 모든 항목을 처리할 수 있습니다.",
    },
    codeExample: `cities = ["Hyderabad", "Seoul", "Daegu"]\nfor c in cities:\n    print(c)`,
    exercise: {
      prompt: {
        en: "Create a list called `topics` with the values \"variables\" and \"loops\".",
        ur: "\"variables\" اور \"loops\" اقدار کے ساتھ `topics` نامی ایک فہرست بنائیں۔",
        ko: "\"variables\"와 \"loops\" 값을 가진 `topics`라는 리스트를 만드세요.",
      },
      accept: [`topics = ["variables", "loops"]`, `topics=["variables","loops"]`],
    },
  },
];
