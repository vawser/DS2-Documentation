// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    
// @linked    []
// @version    3.4.1
// ==/EMEVD==

Event(850, Default, function(X0_2, X4_4, X8_1) {
    HealFlatAmountOverTime(X0_2, X4_4, X8_1);
});

Event(851, Default, function(X0_4, X4_4, X8_1) {
    HealPercentageAmountOverTime(X0_4, X4_4, X8_1);
});

Event(852, Default, function(X0_4, X4_4, X8_1) {
    UnknownCommand10105002(X0_4, X4_4, X8_1);
});

Event(870, Default, function(X0_1, X4_4) {
    PreventStatusEffect(X0_1, X4_4);
});

Event(871, Default, function(X0_1) {
    ClearStatusEffect(X0_1);
});

Event(872, Default, function(X0_1, X4_4, X8_4, X12_4, X16_4, X20_1) {
    ApplyStatusEffect(X0_1, X4_4, X8_4, X12_4, X16_4, X20_1);
});

Event(930, Default, function(X0_1, X4_4) {
    ModifyPlayerSoulsAdditively(X0_1, X4_4);
});

Event(931, Default, function(X0_1, X4_4) {
    ModifyPlayerSoulsMultiplicatively(X0_1, X4_4);
});
