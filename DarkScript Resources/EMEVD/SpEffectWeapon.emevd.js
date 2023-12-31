// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N               :               \               F               R               P               G               2               _               6               4               \               T               o               o               l               \               e               x               c               e               l               \               e               m               e               v               d               \               S               p               E               f               f               e               c               t               M               u               s               t               S               u               b               .               e               m               e               v               d                                                                                                                                                                                                                                               
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

Event(1670010, Default, function() { // Spider Fang
    SpawnSFX(5406, 249, 1, 0, 0, 0);
    UnknownCommand10004004(0, 5);
    UnknownCommand10009006(7, 0.7, 3);
    UnknownCommand10009007(7, 0.7, 3);
    ModifyStatAdditively(AdditiveStatType.Weight, 7, 30);
});

Event(1720010, Default, function() { // Chaos Blade
    SelfdamageCharacterOneoff(1720000);
});

Event(1900000, Default, function() { // Ruler's Sword
    ApplySoulScalingToWeapon(0, 10000, 1000000, 0.85, 1.3, 0);
});

Event(1960000, Default, function() { // Defender Greatsword
    SpawnBuffSFX(5225, 0.1, 0, 1, 0, 0);
    SpawnSFX(5315, 8, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(45, BuffType.Lightning, 50);
    ModifyDamageFlatToBaseAr(45, BuffType.Lightning, 70);
});

Event(1970000, Default, function() { // Watcher Greatsword
    SpawnBuffSFX(5178, 0.1, 0, 1, 0, 0);
    SpawnSFX(5311, 249, 1, 0, 0, 0);
    IncreaseDamageMultiplicatively(45, BuffType.Magic, 70);
    ModifyDamageFlatToBaseAr(45, BuffType.Magic, 10);
});

Event(1990010, Default, function() { // Drakeblood Greatsword
    SetStateInfoCategory(40, 0, 0); 
    SpawnSFX(5414, 249, 1, 0, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.OutgoingDamageRate, 20, 1.05);
});

Event(2090000, Default, function() { // Butcher's Knife
    HealSubEvent(1, 852, 1090519040, 0.25, 1);
});

Event(2500000, Default, function() { // Handmaid's Ladle
    ModifyStatAdditively(AdditiveStatType.Vitality, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 2);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Dexterity, 0, 99, -1, -1);
});

Event(2680000, Default, function() { // Dragon Tooth
    SetStateInfoCategory(20, 0, 0);
    BuffDefense(0, BuffType.Magic, 5);
    BuffDefense(0, BuffType.Fire, 5);
});

Event(3400010, Default, function() { // Fists
    CreateBullet(10070, 10070, 1, 0.7);
    CreateBullet(10071, 10071, 0, 1);
    SetSpEffectLength(0.5);
});

Event(3440000, Default, function() { // Work Hook
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 5);
    ModifyAttributeBasedOnCurrentValue(AttributeType.Adaptability, 0, 99, -3, -3);
});

Event(3810000, Default, function() { // Staff of Amana
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 1, 0.1, 0);
});

Event(4110000, Default, function() { // Azal's Staff
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.03);
});

Event(4200000, Default, function() { // Short Bow
    ModifyBowProperties(0, BowType.RegularBows, 0, 0.95, 1, 1, 1, 1);
});

Event(4210000, Default, function() { // Long Bow
    ModifyBowProperties(0, BowType.RegularBows, 0, 1, 1, 1, 1, 1);
});

Event(4220000, Default, function() { // Composite Bow
    ModifyBowProperties(0, BowType.RegularBows, 0, 0.95, 1, 0.5, 1, 1);
});

Event(4230000, Default, function() { // Sea Bow
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.25, 1, 1, 1, 1);
});

Event(4240000, Default, function() { // Dragonrider Bow
    ModifyBowProperties(0, BowType.RegularBows, 0, 0.95, 1, 0.5, 1, 1);
});

Event(4270000, Default, function() { // Bell Keeper Bow
    ModifyBowProperties(0, BowType.RegularBows, 0, 1, 1, 1, 1, 1);
});

Event(4280000, Default, function() { // Bow of Want
    ModifyBowProperties(0, BowType.RegularBows, 0, 1, 1, 1, 1, 1);
});

Event(4290000, Default, function() { // Hunter's Blackbow
    ModifyBowProperties(0, BowType.RegularBows, 0, 1.2, 1, 1, 1, 1);
});

Event(4400000, Default, function() { // Alonne Greatbow
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1, 1, 1, 1, 1);
});

Event(4420000, Default, function() { // Dragonslayer Greatbow
    ModifyBowProperties(0, BowType.RegularBows, 1E-45, 1, 1, 1, 1, 1);
});

Event(4600000, Default, function() { // Light Crossbow
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 0.85, 1, 0.5, 1, 1);
});

Event(4610000, Default, function() { // Heavy Crossbow
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1, 1, 1, 1, 1);
});

Event(4630000, Default, function() { // Shield Crossbow
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 1.1, 1, 1, 1, 1);
});

Event(4660000, Default, function() { // Avelyn
    ModifyBowProperties(0, BowType.RegularBows, 3E-45, 0.85, 1, 0.5, 1, 1);
});

Event(5295000, Default, function() { // Lost Sinner's Sword
    SelfdamageCharacterOneoff(5295000);
});

Event(5295010, Default, function() { // Lost Sinner's Sword
    ApplySpecialScalingToWeapon(SpecialScalingType.Sin, 30, 1, 0, 0);
});

Event(5400000, Default, function() { // Pyromancy Flame
    SpawnBuffSFX(5423, 0.1, 0, 1, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 0);
});

Event(5410000, Default, function() { // Dark Pyromancy Flame
    SpawnBuffSFX(5424, 0.1, 0, 1, 0, 0);
    SetStateInfo(StateInfoType.Unknown23, 0);
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 0.1, 1, 0);
});

Event(6000000, Default, function() { // Torch
    SelfdamageCharacterAndNearbyEnemiesPeriodic(1980000, 0.3, 2);
});

Event(11330000, Default, function() { // Shield of the Insolent
    SetStateInfoCategory(10, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.05);
});

Event(11390000, Default, function() { // Slumbering Dragon Shield
    SetStateInfoCategory(10, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.05);
});

Event(11640000, Default, function() { // Drakekeeper's Greatshield
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown46, 0, 1.05);
});

Event(11720000, Default, function() { // Watchdragon Parma
    SetStateInfoCategory(90, 0, 0);
    SetStateInfo(StateInfoType.Unknown19, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.Unknown46, 0, 0.5);
});

Event(11730000, Default, function() { // Blossom Kite Shield
    SetStateInfoCategory(10, 0, 0);
    SpawnSFX(930, 249, 1, 50, 0, 0);
    ModifyStaminaRecovery(0, 1.05);
});

Event(11750000, Default, function() { // Wicked Eye Greatshield
    ModifyStatAdditively(AdditiveStatType.CurrentHP, 0, 15);
});

Event(1140000, Default, function() { // Blue Dagger
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.MiraclePower, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.PyromancyPower, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.05);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerChime, 0, 1.05);
    NerfDefense(0, BuffType.Magic, 20);
    NerfDefense(0, BuffType.Lightning, 20);
    NerfDefense(0, BuffType.Fire, 20);
    NerfDefense(0, BuffType.Dark, 20);
});

Event(1260010, Default, function() { // Possessed Armor Sword
    SpawnBuffSFX(903, 0.1, 0, 0.9, 0, 0);
    SpawnSFX(957, 8, 1, 0, 0, 0);
    ModifyDamageFlatToBaseAr(25, BuffType.Fire, 50);
});

Event(1630010, Default, function() { // Eleum Loyce
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 150, 1, 1);
});

Event(1630011, Default, function() { // Eleum Loyce
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 200, 1, 1);
});

Event(1630020, Default, function() { // Eleum Loyce
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 150, 1, 1);
});

Event(1630021, Default, function() { // Eleum Loyce
    SpawnSFX(5443, 249, 0, 0, 0, 0);
    HealSubEvent(1, 850, 250, 1, 1);
});

Event(1790015, Default, function() { // Bewitched Alonne Sword
    SpawnBuffSFX(5444, 10, 0, 1, 0, 0);
    SetSpEffectLength(3);
});

Event(1790020, Default, function() { // Bewitched Alonne Sword
    CreateBullet(20088921, 20088921, 0, 0);
    SpawnSFX(5317, 249, 1, 0, 0, 0);
    SetStateInfoCategory(40, 0, 0);
    SpawnBuffSFX(5441, 10, 0, 1, 0, 0);
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 1.6, 1.6, 30);
});

Event(1830000, Default, function() { // Majestic Greatsword
    ForceWeapon(0, 1831000);
});

Event(2760000, Default, function() { // Sanctum Mace
    SelfdamageCharacterOneoff(20097100);
});

Event(2760010, Default, function() { // Sanctum Mace
    SelfdamageCharacterOneoff(20097110);
});

Event(2855000, Default, function() { // Yorgh's Spear
    SetStateInfoCategory(30, 0, 0);
    BuffDefense(0, BuffType.Poison, 20);
    BuffDefense(0, BuffType.Bleed, 7);
    BuffDefense(0, BuffType.Curse, 7);
    BuffDefense(0, BuffType.Petrify, 7);
    NerfDefense(0, BuffType.Magic, 7);
    NerfDefense(0, BuffType.Lightning, 7);
    NerfDefense(0, BuffType.Fire, 7);
    NerfDefense(0, BuffType.Dark, 7);
});

Event(3530000, Default, function() { // Bone Fist
    SpawnSFX(5432, 20, 1, 0, 0, 0);
    SpawnSFX(5432, 21, 1, 0, 0, 0);
    SetSpEffectLength(0.95);
});

Event(3530010, Default, function() { // Bone Fist
    CreateBullet(20088700, 20088700, 1, 1.8);
    SetSpEffectLength(0.5);
    ModifyProperty(PlayerPropertyType.EquippedRightHandWeaponDurability, 0, -5);
    ModifyProperty(PlayerPropertyType.EquippedLeftHandWeaponDurability, 0, -5);
});

Event(3930000, Default, function() { // Azal's Staff
    SetStateInfoCategory(160, 0, 0);
    ModifyStatMultiplicatively(MultiplicativeStatType.MaxSpellUsages, 0, 0.25);
    ModifyStatMultiplicatively(MultiplicativeStatType.SorceryPower, 0, 1.025);
    ModifyStatMultiplicatively(MultiplicativeStatType.HexPowerStaff, 0, 1.025);
});

Event(4120000, Default, function() { // Chime of Screams
    ModifyAttributeBasedOnCurrentValue(AttributeType.Faith, 6, 60, 8, 2);
});

Event(5050000, Default, function() { // Curved Nil Greatsword
    SpawnSFX(5465, 220, 1, 30, 2, 2);
    ApplyNgScalingToWeapon(2, 10, 30, 200, 2);
    ApplyNgScalingToWeapon(2, 10, 5, 100, 1);
});

Event(5255000, Default, function() { // Ivory King Ultra Greatsword
    SpawnBuffSFX(5481, 10, 0, 1, 0, 0);
    SetSpEffectLength(1.7);
});

Event(11320000, Default, function() { // Vessel Shield
    ModifyStatAdditively(AdditiveStatType.Vigor, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Endurance, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Strength, 0, 4);
    ModifyStatAdditively(AdditiveStatType.Dexterity, 0, 4);
    ModifyStatAdditively(AdditiveStatType.Adaptability, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Intelligence, 0, 1);
    ModifyStatAdditively(AdditiveStatType.Faith, 0, 1);
});

Event(11290000, Default, function() { // Loyce Shield
    SetStateInfoCategory(120, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 2, 3, 0);
});

Event(11295000, Default, function() { // Charred Loyce Shield
    SetStateInfoCategory(120, 0, 0);
    SpawnSFX(935, 249, 1, 40, 0, 0);
    HPRestorationEffect(1, 2);
    HealSubEvent(1, 850, 2, 3, 0);
});

Event(1997000, Default, function() { // Greatsword of the Forlorn
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 0.1, 1, 0);
});

Event(3080000, Default, function() { // Scythe of the Forlorn
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 10, 0.1, 1, 0);
});
