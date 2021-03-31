import bcrypt from "bcryptjs";

const testData = {
  users: [
    {
      name: "Admin",
      email: "admin@medicom.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
      seller: {
        name: "Puma",
        logo: "/images/logo1.png",
        description: "best seller",
        rating: 4.5,
        numReviews: 120,
      },
    },
  ],
  products: [
    {
      name: "Venlafaxine Extended-Release (Effexor Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Extended-Release (Effexor)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Extended-Release (Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Extended (Effexor Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Release (Effexor Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Extended-Release (Effexor Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine (Effexor Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Extended-Release",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Extended (Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Extended (Effexor)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine Release (Effexor)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Venlafaxine",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
    {
      name: "Release (Effexor Xr)",
      manufacturer: {
        name: "Zydus",
        logo: "/images/p2.png",
        base: "United States",
        description: `Founded in 2005, Zydus Pharmaceuticals 
        distributes about 230 drugs in the U.S. In 2016, it 
        was ranked the seventh largest generic drug corporation 
        in the U.S. based on dispensed prescriptions. Zydus has 
        20+ manufacturing sites in India and the U.S.`,
      },
      form: "Capsule Er",
      image: "/images/p1.png",
      brief: "Used to treat depression and certain anxiety disorders",
      price: 6.0,
      strength: 37.5,
      countInStock: 500,
      healthCondition: "Depression",
      description: `Venlafaxine extended-release (Xr) is the generic 
      form of the brand-name medication Effexor Xr. It is an antidepressant 
      used to treat depression and certain anxiety disorders by increasing 
      serotonin and norepinephrine levels in the brain.`,
    },
  ],
};
export default testData;
