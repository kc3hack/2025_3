type Facility = {
  name: string;
  img_path: string;
  efficiency: number;
  cost: number;
  magnification: number;
  isLocked: boolean;
};

const facilities: Facility[] = [];
for (let i = 0; i < 10; i++) {
  facilities.push({
    name: "施設" + i,
    img_path: "../../img/facilities/landmark_oosakajou.png",
    efficiency: 1.0,
    cost: 1000000 * (i + 1),
    magnification: 2.0,
    isLocked: true,
  });
}
facilities[0].isLocked = facilities[1].isLocked = false;

export default facilities;
