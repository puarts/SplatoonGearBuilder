
const WeaponId = {
    SplattershotJr: 0,
};

const GearPowerId = {
    None: 0,
    InkSaverMain: 1,
    InkSaverSub: 2,
    InkRecoveryUp: 3,
    RunSpeedUp: 4,
    SwimSpeedUp: 5,
    SpecialChargeUp: 6,
};

class Weapon
{
    constructor(){
        this.id = WeaponId.SplattershotJr;
    }
}

class Gear
{
    constructor(){
        this.mainPower = GearPowerId.InkSaverMain;
        this.subPower1 = GearPowerId.None;
        this.subPower2 = GearPowerId.None;
        this.subPower3 = GearPowerId.None;
    }
}

class SplatoonGearBuilderMain
{
    constructor(){
        this.weapon = new Weapon();
        this.headGear = new Gear();
        this.bodyGear = new Gear();
        this.footGear = new Gear();
    }
}

function getGearPowerThumbName(gear)
{
    switch(gear)
    {
        case GearPowerId.InkSaverMain: return "48px-S3_Ability_Ink_Saver_(Main).png";
        case GearPowerId.InkSaverSub: return "48px-S3_Ability_Ink_Saver_(Sub).png";
        case GearPowerId.InkRecoveryUp: return "48px-S3_Ability_Ink_Recovery_Up.png";
        case GearPowerId.RunSpeedUp: return "48px-S3_Ability_Run_Speed_Up.png";
        case GearPowerId.SwimSpeedUp: return "48px-S3_Ability_Swim_Speed_Up.png";
        case GearPowerId.SpecialChargeUp: return "48px-S3_Ability_Special_Charge_Up.png";
        default:
            return "";
    }
}

g_appData = new SplatoonGearBuilderMain();

const g_app = new Vue({
    el: "#app",
    data: g_appData,
    methods: {
    }
});
