// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    N : \ F R P G 2 \ T o o l \ e x c e l \ e m e v d \ S p E f f e c t M u s t S u b . e m e v d   
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

Event(600, Default, function() {
    HealFlatAmountOverTime(0, 0, 1);
    HealPercentageAmountOverTime(0, 0, 1);
    UnknownCommand10105002(0, 0, 1);
    SpawnSFX(0, 0, 1, 0, 0, 0);
    ApplyStatusEffect(StatusEffectType.Poison, 0, 0, 0, 0, 0);
    ApplyStatusEffect(StatusEffectType.Toxic, 0, 0, 0, 0, 0);
});

Event(601, Default, function() {
    UnknownCommand10070003(96030010);
});

Event(748, Default, function() {
    ApplySpEffectBasedOnIntelligence(0, 0, 0, 0, 0);
    BatchCreateBullets(0, 0, 0, 0);
});

Event(749, Default, function() {
    UnknownCommand10008000(0, 1, 0);
});

Event(750, Default, function() {
    IncreaseDamageMultiplicatively(0, BuffType.Magic, 0);
});

Event(751, Default, function() {
    ResetInvasionCooldownTimer();
});

Event(752, Default, function() {
    InitiateClientmediatedMultiplayerItem(ClientItemType.WhiteSignSoapstone);
});

Event(753, Default, function() {
    InitiateServermediatedMultiplayerItem(ServerItemType.CrackedRedEyeOrb);
});

Event(754, Default, function() {
    WarpPlayer(0, -1, -1);
});

Event(755, Default, function() {
    RestoreHumanity(true);
});

Event(756, Default, function() {
    SetCharacterImmortality(false);
});

Event(757, Default, function() {
    UnknownCommand10009006(0, 1, 1);
});

Event(758, Default, function() {
    UnknownCommand10009007(0, 1, 1);
});

Event(759, Default, function() {
    UnknownCommand10013003(0, 0, 0);
});

Event(760, Default, function() {
    PreventStatusEffect(StatusEffectType.Poison, 0);
});

Event(761, Default, function() {
    ApplyStatusEffect(StatusEffectType.Poison, 0, 0, 0, 0, 0);
});

Event(762, Default, function() {
    PreventStatusEffect(StatusEffectType.Bleed, 0);
});

Event(763, Default, function() {
    ApplyStatusEffect(StatusEffectType.Bleed, 0, 0, 0, 0, 0);
});

Event(764, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown2, 0);
});

Event(765, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown2, 0, 0, 0, 0, 0);
});

Event(766, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown3, 0);
});

Event(767, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown3, 0, 0, 0, 0, 0);
});

Event(768, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown4, 0);
});

Event(769, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown4, 0, 0, 0, 0, 0);
});

Event(770, Default, function() {
    PreventStatusEffect(StatusEffectType.Silence, 0);
});

Event(771, Default, function() {
    ApplyStatusEffect(StatusEffectType.Silence, 0, 0, 0, 0, 0);
});

Event(772, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown6, 0);
});

Event(773, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown6, 0, 0, 0, 0, 0);
});

Event(774, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown7, 0);
});

Event(775, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown7, 0, 0, 0, 0, 0);
});

Event(776, Default, function() {
    PreventStatusEffect(StatusEffectType.Toxic, 0);
});

Event(777, Default, function() {
    ApplyStatusEffect(StatusEffectType.Toxic, 0, 0, 0, 0, 0);
});

Event(778, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown9, 0);
});

Event(779, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown9, 0, 0, 0, 0, 0);
});

Event(780, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown10, 0);
});

Event(781, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown10, 0, 0, 0, 0, 0);
});

Event(782, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown11, 0);
});

Event(783, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown11, 0, 0, 0, 0, 0);
});

Event(784, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown12, 0);
});

Event(785, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown12, 0, 0, 0, 0, 0);
});

Event(786, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown13, 0);
});

Event(787, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown13, 0, 0, 0, 0, 0);
});

Event(788, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown14, 0);
});

Event(789, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown14, 0, 0, 0, 0, 0);
});
