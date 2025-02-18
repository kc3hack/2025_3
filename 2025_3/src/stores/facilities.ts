type Facility = {
  name: string;
  img_path: string;
  efficiency: number;
  cost: number;
  magnification: number;
  isLocked: boolean;
  level: number;
  stock: number;
};

const facilities: Facility[] = [];
for (let i = 0; i < 10; i++) {
  facilities.push({
    name: "施設" + i,
    img_path: "/img/facilities/landmark_oosakajou.png",
    efficiency: 1.0,
    cost: 1000000,
    magnification: 1.5,
    isLocked: true,
    level: 0,
    stock: 0,
  });
}
facilities[0].isLocked = facilities[1].isLocked = false;

export default facilities;
