'use strict';

angular.module('pruebaApp')

  .controller('CategoriasCTRL', ['$scope',function($scope) {

    var categorias = [{"_id": "Bares y restaurantes", "cps": [{"cp_dest": 28053, "sum_num_cards": 1979, "sum_num_payments": 2477, "sum_incomes": 95170.89999999997}, {"cp_dest": 28051, "sum_num_cards": 9936, "sum_num_payments": 11699, "sum_incomes": 310211.92999999993}, {"cp_dest": 28050, "sum_num_cards": 24810, "sum_num_payments": 53974, "sum_incomes": 1275333.9399999995}, {"cp_dest": 28047, "sum_num_cards": 2021, "sum_num_payments": 2637, "sum_incomes": 134671.3099999999}, {"cp_dest": 28045, "sum_num_cards": 13919, "sum_num_payments": 20550, "sum_incomes": 683279.0000000002}, {"cp_dest": 28042, "sum_num_cards": 17113, "sum_num_payments": 25115, "sum_incomes": 568723.2800000006}, {"cp_dest": 28038, "sum_num_cards": 3719, "sum_num_payments": 4587, "sum_incomes": 121046.93000000011}, {"cp_dest": 28040, "sum_num_cards": 3023, "sum_num_payments": 4546, "sum_incomes": 176539.24999999985}, {"cp_dest": 28037, "sum_num_cards": 7793, "sum_num_payments": 21295, "sum_incomes": 413505.43000000017}, {"cp_dest": 28035, "sum_num_cards": 5780, "sum_num_payments": 7815, "sum_incomes": 323934.1999999999}, {"cp_dest": 28032, "sum_num_cards": 7764, "sum_num_payments": 10471, "sum_incomes": 269594.19000000006}, {"cp_dest": 28030, "sum_num_cards": 4081, "sum_num_payments": 5818, "sum_incomes": 167591.89000000022}, {"cp_dest": 28049, "sum_num_cards": 5728, "sum_num_payments": 7823, "sum_incomes": 224240.2299999998}, {"cp_dest": 28028, "sum_num_cards": 10501, "sum_num_payments": 14712, "sum_incomes": 529528.8399999999}, {"cp_dest": 28024, "sum_num_cards": 3250, "sum_num_payments": 4312, "sum_incomes": 114684.48}, {"cp_dest": 28021, "sum_num_cards": 2319, "sum_num_payments": 4114, "sum_incomes": 137938.07}, {"cp_dest": 28020, "sum_num_cards": 36745, "sum_num_payments": 56300, "sum_incomes": 2645470.0100000007}, {"cp_dest": 28023, "sum_num_cards": 12966, "sum_num_payments": 18826, "sum_incomes": 782182.4699999994}, {"cp_dest": 28019, "sum_num_cards": 2703, "sum_num_payments": 4300, "sum_incomes": 161058.85999999996}, {"cp_dest": 28018, "sum_num_cards": 2425, "sum_num_payments": 3100, "sum_incomes": 86719.24999999999}, {"cp_dest": 28017, "sum_num_cards": 2879, "sum_num_payments": 3618, "sum_incomes": 161096.81000000003}, {"cp_dest": 28016, "sum_num_cards": 16221, "sum_num_payments": 24290, "sum_incomes": 1037120.5200000003}, {"cp_dest": 28015, "sum_num_cards": 20227, "sum_num_payments": 28155, "sum_incomes": 1028433.26}, {"cp_dest": 28014, "sum_num_cards": 22940, "sum_num_payments": 70186, "sum_incomes": 1437186.41}, {"cp_dest": 28013, "sum_num_cards": 40587, "sum_num_payments": 73292, "sum_incomes": 1814624.7599999988}, {"cp_dest": 28012, "sum_num_cards": 22227, "sum_num_payments": 29040, "sum_incomes": 852168.3700000001}, {"cp_dest": 28041, "sum_num_cards": 3808, "sum_num_payments": 5216, "sum_incomes": 114327.09999999999}, {"cp_dest": 28011, "sum_num_cards": 2682, "sum_num_payments": 3406, "sum_incomes": 187760.57999999996}, {"cp_dest": 28052, "sum_num_cards": 200, "sum_num_payments": 213, "sum_incomes": 18248.340000000004}, {"cp_dest": 28008, "sum_num_cards": 24867, "sum_num_payments": 48184, "sum_incomes": 1063159.6899999997}, {"cp_dest": 28006, "sum_num_cards": 35278, "sum_num_payments": 56414, "sum_incomes": 2359205.820000002}, {"cp_dest": 28044, "sum_num_cards": 2596, "sum_num_payments": 3528, "sum_incomes": 116369.65999999999}, {"cp_dest": 28004, "sum_num_cards": 43087, "sum_num_payments": 70793, "sum_incomes": 2359243.9000000004}, {"cp_dest": 28026, "sum_num_cards": 4666, "sum_num_payments": 6179, "sum_incomes": 254537.22999999998}, {"cp_dest": 28036, "sum_num_cards": 26239, "sum_num_payments": 40656, "sum_incomes": 2006930.0699999984}, {"cp_dest": 28002, "sum_num_cards": 19164, "sum_num_payments": 33648, "sum_incomes": 1281768.8499999994}, {"cp_dest": 28027, "sum_num_cards": 14554, "sum_num_payments": 25451, "sum_incomes": 758594.61}, {"cp_dest": 28007, "sum_num_cards": 8930, "sum_num_payments": 14117, "sum_incomes": 456991.4900000006}, {"cp_dest": 28034, "sum_num_cards": 10431, "sum_num_payments": 14652, "sum_incomes": 719485.2499999998}, {"cp_dest": 28025, "sum_num_cards": 4874, "sum_num_payments": 6397, "sum_incomes": 175233.68000000002}, {"cp_dest": 28046, "sum_num_cards": 19360, "sum_num_payments": 32376, "sum_incomes": 1110099.8499999982}, {"cp_dest": 28033, "sum_num_cards": 10758, "sum_num_payments": 24295, "sum_incomes": 503094.6799999999}, {"cp_dest": 28048, "sum_num_cards": 959, "sum_num_payments": 1102, "sum_incomes": 102173.28000000003}, {"cp_dest": 28039, "sum_num_cards": 3704, "sum_num_payments": 5390, "sum_incomes": 325014.1400000002}, {"cp_dest": 28003, "sum_num_cards": 20730, "sum_num_payments": 30902, "sum_incomes": 1167683.3700000003}, {"cp_dest": 28009, "sum_num_cards": 16813, "sum_num_payments": 22512, "sum_incomes": 1313071.4499999974}, {"cp_dest": 28005, "sum_num_cards": 18568, "sum_num_payments": 25420, "sum_incomes": 1139605.0999999996}, {"cp_dest": 28043, "sum_num_cards": 25107, "sum_num_payments": 37217, "sum_incomes": 1254388.38}, {"cp_dest": 28031, "sum_num_cards": 8243, "sum_num_payments": 13399, "sum_incomes": 268725.86000000016}, {"cp_dest": 28001, "sum_num_cards": 33884, "sum_num_payments": 52498, "sum_incomes": 2668492.599999999}, {"cp_dest": 28010, "sum_num_cards": 21636, "sum_num_payments": 32978, "sum_incomes": 1203197.0600000003}, {"cp_dest": 28022, "sum_num_cards": 15747, "sum_num_payments": 21944, "sum_incomes": 781613.1999999997}, {"cp_dest": 28029, "sum_num_cards": 21049, "sum_num_payments": 44991, "sum_incomes": 758450.1199999994}, {"cp_dest": 28054, "sum_num_cards": 10426, "sum_num_payments": 12717, "sum_incomes": 322675.0799999999}]}, {"_id": "Contenidos", "cps": [{"cp_dest": 28053, "sum_num_cards": 28, "sum_num_payments": 33, "sum_incomes": 1061.33}, {"cp_dest": 28050, "sum_num_cards": 320, "sum_num_payments": 365, "sum_incomes": 15722.98}, {"cp_dest": 28047, "sum_num_cards": 53, "sum_num_payments": 54, "sum_incomes": 1444.12}, {"cp_dest": 28044, "sum_num_cards": 203, "sum_num_payments": 216, "sum_incomes": 5358.8099999999995}, {"cp_dest": 28043, "sum_num_cards": 847, "sum_num_payments": 936, "sum_incomes": 38321.520000000004}, {"cp_dest": 28042, "sum_num_cards": 2299, "sum_num_payments": 2433, "sum_incomes": 42065.530000000006}, {"cp_dest": 28041, "sum_num_cards": 139, "sum_num_payments": 147, "sum_incomes": 3045.89}, {"cp_dest": 28040, "sum_num_cards": 482, "sum_num_payments": 598, "sum_incomes": 17966.450000000004}, {"cp_dest": 28039, "sum_num_cards": 185, "sum_num_payments": 192, "sum_incomes": 30503.62}, {"cp_dest": 28038, "sum_num_cards": 100, "sum_num_payments": 108, "sum_incomes": 2811.9500000000003}, {"cp_dest": 28036, "sum_num_cards": 356, "sum_num_payments": 401, "sum_incomes": 17148.339999999997}, {"cp_dest": 28035, "sum_num_cards": 119, "sum_num_payments": 136, "sum_incomes": 3493.5299999999997}, {"cp_dest": 28032, "sum_num_cards": 610, "sum_num_payments": 665, "sum_incomes": 18936.269999999997}, {"cp_dest": 28031, "sum_num_cards": 180, "sum_num_payments": 210, "sum_incomes": 6432.169999999999}, {"cp_dest": 28030, "sum_num_cards": 109, "sum_num_payments": 114, "sum_incomes": 2877.3500000000004}, {"cp_dest": 28029, "sum_num_cards": 715, "sum_num_payments": 753, "sum_incomes": 18509.95}, {"cp_dest": 28028, "sum_num_cards": 779, "sum_num_payments": 885, "sum_incomes": 29931.879999999994}, {"cp_dest": 28026, "sum_num_cards": 155, "sum_num_payments": 166, "sum_incomes": 4733.67}, {"cp_dest": 28025, "sum_num_cards": 177, "sum_num_payments": 251, "sum_incomes": 8878.73}, {"cp_dest": 28024, "sum_num_cards": 415, "sum_num_payments": 622, "sum_incomes": 26553.749999999996}, {"cp_dest": 28020, "sum_num_cards": 2724, "sum_num_payments": 3079, "sum_incomes": 97143.22000000003}, {"cp_dest": 28016, "sum_num_cards": 257, "sum_num_payments": 273, "sum_incomes": 11273.769999999999}, {"cp_dest": 28011, "sum_num_cards": 73, "sum_num_payments": 83, "sum_incomes": 2224.32}, {"cp_dest": 28005, "sum_num_cards": 2487, "sum_num_payments": 2811, "sum_incomes": 105737.23000000001}, {"cp_dest": 28003, "sum_num_cards": 797, "sum_num_payments": 883, "sum_incomes": 33582.05}, {"cp_dest": 28046, "sum_num_cards": 678, "sum_num_payments": 736, "sum_incomes": 24213.08000000002}, {"cp_dest": 28001, "sum_num_cards": 1055, "sum_num_payments": 1169, "sum_incomes": 56723.839999999975}, {"cp_dest": 28037, "sum_num_cards": 160, "sum_num_payments": 167, "sum_incomes": 6583.33}, {"cp_dest": 28009, "sum_num_cards": 4823, "sum_num_payments": 5304, "sum_incomes": 161536.18999999992}, {"cp_dest": 28019, "sum_num_cards": 195, "sum_num_payments": 206, "sum_incomes": 4999.819999999999}, {"cp_dest": 28027, "sum_num_cards": 1494, "sum_num_payments": 1681, "sum_incomes": 56152.73000000001}, {"cp_dest": 28022, "sum_num_cards": 299, "sum_num_payments": 328, "sum_incomes": 8375.28}, {"cp_dest": 28017, "sum_num_cards": 144, "sum_num_payments": 157, "sum_incomes": 5412.16}, {"cp_dest": 28015, "sum_num_cards": 4319, "sum_num_payments": 4924, "sum_incomes": 238862.49000000005}, {"cp_dest": 28004, "sum_num_cards": 3649, "sum_num_payments": 4220, "sum_incomes": 191341.75000000006}, {"cp_dest": 28010, "sum_num_cards": 5708, "sum_num_payments": 6380, "sum_incomes": 232399.26999999984}, {"cp_dest": 28002, "sum_num_cards": 1088, "sum_num_payments": 1256, "sum_incomes": 37890.18}, {"cp_dest": 28018, "sum_num_cards": 40, "sum_num_payments": 40, "sum_incomes": 1108.83}, {"cp_dest": 28034, "sum_num_cards": 1721, "sum_num_payments": 1984, "sum_incomes": 82027.14000000003}, {"cp_dest": 28021, "sum_num_cards": 187, "sum_num_payments": 210, "sum_incomes": 6224.0199999999995}, {"cp_dest": 28033, "sum_num_cards": 676, "sum_num_payments": 749, "sum_incomes": 21685.329999999998}, {"cp_dest": 28007, "sum_num_cards": 525, "sum_num_payments": 678, "sum_incomes": 22041.909999999996}, {"cp_dest": 28012, "sum_num_cards": 2899, "sum_num_payments": 3191, "sum_incomes": 113938.72999999997}, {"cp_dest": 28008, "sum_num_cards": 2115, "sum_num_payments": 2334, "sum_incomes": 87253.31999999999}, {"cp_dest": 28049, "sum_num_cards": 98, "sum_num_payments": 116, "sum_incomes": 2722.06}, {"cp_dest": 28006, "sum_num_cards": 2443, "sum_num_payments": 2751, "sum_incomes": 94483.08}, {"cp_dest": 28045, "sum_num_cards": 567, "sum_num_payments": 642, "sum_incomes": 20456.95}, {"cp_dest": 28014, "sum_num_cards": 908, "sum_num_payments": 991, "sum_incomes": 37690.28000000001}, {"cp_dest": 28023, "sum_num_cards": 412, "sum_num_payments": 467, "sum_incomes": 17603.58}, {"cp_dest": 28013, "sum_num_cards": 12342, "sum_num_payments": 14335, "sum_incomes": 486607.4600000001}]}, {"_id": "Moda", "cps": [{"cp_dest": 28051, "sum_num_cards": 15420, "sum_num_payments": 32707, "sum_incomes": 1183651.7499999995}, {"cp_dest": 28043, "sum_num_cards": 12344, "sum_num_payments": 26432, "sum_incomes": 949175.3900000004}, {"cp_dest": 28041, "sum_num_cards": 14033, "sum_num_payments": 28053, "sum_incomes": 1090744.4399999997}, {"cp_dest": 28047, "sum_num_cards": 13339, "sum_num_payments": 26144, "sum_incomes": 1142242.3299999994}, {"cp_dest": 28040, "sum_num_cards": 496, "sum_num_payments": 611, "sum_incomes": 61218.44999999999}, {"cp_dest": 28037, "sum_num_cards": 39235, "sum_num_payments": 60927, "sum_incomes": 1200331.9299999988}, {"cp_dest": 28036, "sum_num_cards": 6893, "sum_num_payments": 14396, "sum_incomes": 529117.9000000001}, {"cp_dest": 28035, "sum_num_cards": 14597, "sum_num_payments": 35467, "sum_incomes": 1299036.3200000008}, {"cp_dest": 28034, "sum_num_cards": 22534, "sum_num_payments": 46872, "sum_incomes": 2143263.360000003}, {"cp_dest": 28030, "sum_num_cards": 23518, "sum_num_payments": 49355, "sum_incomes": 2056312.4099999995}, {"cp_dest": 28028, "sum_num_cards": 8490, "sum_num_payments": 16361, "sum_incomes": 572520.2400000001}, {"cp_dest": 28032, "sum_num_cards": 15393, "sum_num_payments": 33570, "sum_incomes": 1403765.3000000003}, {"cp_dest": 28026, "sum_num_cards": 12835, "sum_num_payments": 29091, "sum_incomes": 968963.1000000002}, {"cp_dest": 28024, "sum_num_cards": 4200, "sum_num_payments": 8052, "sum_incomes": 257210.78000000017}, {"cp_dest": 28021, "sum_num_cards": 19446, "sum_num_payments": 38279, "sum_incomes": 1937506.4499999993}, {"cp_dest": 28020, "sum_num_cards": 25020, "sum_num_payments": 48620, "sum_incomes": 1648797.1199999987}, {"cp_dest": 28019, "sum_num_cards": 11138, "sum_num_payments": 23676, "sum_incomes": 716306.9999999998}, {"cp_dest": 28018, "sum_num_cards": 13838, "sum_num_payments": 28554, "sum_incomes": 1012295.0300000004}, {"cp_dest": 28017, "sum_num_cards": 16907, "sum_num_payments": 37020, "sum_incomes": 1184792.07}, {"cp_dest": 28016, "sum_num_cards": 6073, "sum_num_payments": 11897, "sum_incomes": 618112.8800000002}, {"cp_dest": 28015, "sum_num_cards": 11690, "sum_num_payments": 22184, "sum_incomes": 775927.1200000006}, {"cp_dest": 28013, "sum_num_cards": 2126, "sum_num_payments": 3216, "sum_incomes": 79520.32999999994}, {"cp_dest": 28006, "sum_num_cards": 14148, "sum_num_payments": 22773, "sum_incomes": 880934.7999999993}, {"cp_dest": 28004, "sum_num_cards": 9553, "sum_num_payments": 16602, "sum_incomes": 408884.6099999995}, {"cp_dest": 28050, "sum_num_cards": 13268, "sum_num_payments": 28398, "sum_incomes": 1056627.3199999996}, {"cp_dest": 28012, "sum_num_cards": 8812, "sum_num_payments": 15104, "sum_incomes": 442030.70000000036}, {"cp_dest": 28054, "sum_num_cards": 26678, "sum_num_payments": 46890, "sum_incomes": 2124424.0100000007}, {"cp_dest": 28044, "sum_num_cards": 9677, "sum_num_payments": 17500, "sum_incomes": 626485.3400000002}, {"cp_dest": 28039, "sum_num_cards": 22060, "sum_num_payments": 40626, "sum_incomes": 1696021.1400000006}, {"cp_dest": 28009, "sum_num_cards": 7502, "sum_num_payments": 14560, "sum_incomes": 473082.55999999994}, {"cp_dest": 28010, "sum_num_cards": 5174, "sum_num_payments": 9656, "sum_incomes": 337090.51}, {"cp_dest": 28003, "sum_num_cards": 10480, "sum_num_payments": 20529, "sum_incomes": 734290.5900000003}, {"cp_dest": 28011, "sum_num_cards": 4373, "sum_num_payments": 7879, "sum_incomes": 238279.64999999997}, {"cp_dest": 28027, "sum_num_cards": 21168, "sum_num_payments": 46766, "sum_incomes": 1507944.1699999997}, {"cp_dest": 28001, "sum_num_cards": 17187, "sum_num_payments": 26385, "sum_incomes": 932584.72}, {"cp_dest": 28002, "sum_num_cards": 14621, "sum_num_payments": 34199, "sum_incomes": 1041114.3400000002}, {"cp_dest": 28014, "sum_num_cards": 5197, "sum_num_payments": 7394, "sum_incomes": 267061.37}, {"cp_dest": 28038, "sum_num_cards": 11709, "sum_num_payments": 26034, "sum_incomes": 825805.0099999998}, {"cp_dest": 28025, "sum_num_cards": 21424, "sum_num_payments": 43109, "sum_incomes": 1634874.7599999986}, {"cp_dest": 28023, "sum_num_cards": 12366, "sum_num_payments": 22837, "sum_incomes": 1376670.109999999}, {"cp_dest": 28005, "sum_num_cards": 19721, "sum_num_payments": 45389, "sum_incomes": 1782436.2800000005}, {"cp_dest": 28008, "sum_num_cards": 6203, "sum_num_payments": 12918, "sum_incomes": 475346.18}, {"cp_dest": 28045, "sum_num_cards": 22538, "sum_num_payments": 58644, "sum_incomes": 1880881.9999999974}, {"cp_dest": 28007, "sum_num_cards": 18367, "sum_num_payments": 46514, "sum_incomes": 1628542.6599999992}, {"cp_dest": 28031, "sum_num_cards": 12278, "sum_num_payments": 28226, "sum_incomes": 1034153.4100000004}, {"cp_dest": 28053, "sum_num_cards": 11051, "sum_num_payments": 19888, "sum_incomes": 822389.2900000003}, {"cp_dest": 28029, "sum_num_cards": 19348, "sum_num_payments": 31747, "sum_incomes": 1621728.7799999989}, {"cp_dest": 28042, "sum_num_cards": 11531, "sum_num_payments": 26009, "sum_incomes": 1180250.1899999988}, {"cp_dest": 28022, "sum_num_cards": 29383, "sum_num_payments": 59784, "sum_incomes": 2559905.7899999996}, {"cp_dest": 28046, "sum_num_cards": 252, "sum_num_payments": 290, "sum_incomes": 12547.710000000003}, {"cp_dest": 28033, "sum_num_cards": 11260, "sum_num_payments": 26890, "sum_incomes": 963682.4599999994}]}, {"_id": "Comida", "cps": [{"cp_dest": 28053, "sum_num_cards": 11051, "sum_num_payments": 19888, "sum_incomes": 822389.2900000003}, {"cp_dest": 28050, "sum_num_cards": 13268, "sum_num_payments": 28398, "sum_incomes": 1056627.3199999996}, {"cp_dest": 28046, "sum_num_cards": 252, "sum_num_payments": 290, "sum_incomes": 12547.710000000003}, {"cp_dest": 28043, "sum_num_cards": 12344, "sum_num_payments": 26432, "sum_incomes": 949175.3900000004}, {"cp_dest": 28042, "sum_num_cards": 11531, "sum_num_payments": 26009, "sum_incomes": 1180250.1899999988}, {"cp_dest": 28040, "sum_num_cards": 496, "sum_num_payments": 611, "sum_incomes": 61218.44999999999}, {"cp_dest": 28039, "sum_num_cards": 22060, "sum_num_payments": 40626, "sum_incomes": 1696021.1400000006}, {"cp_dest": 28054, "sum_num_cards": 26678, "sum_num_payments": 46890, "sum_incomes": 2124424.0100000007}, {"cp_dest": 28038, "sum_num_cards": 11709, "sum_num_payments": 26034, "sum_incomes": 825805.0099999998}, {"cp_dest": 28035, "sum_num_cards": 14597, "sum_num_payments": 35467, "sum_incomes": 1299036.3200000008}, {"cp_dest": 28028, "sum_num_cards": 8490, "sum_num_payments": 16361, "sum_incomes": 572520.2400000001}, {"cp_dest": 28027, "sum_num_cards": 21168, "sum_num_payments": 46766, "sum_incomes": 1507944.1699999997}, {"cp_dest": 28022, "sum_num_cards": 29383, "sum_num_payments": 59784, "sum_incomes": 2559905.7899999996}, {"cp_dest": 28021, "sum_num_cards": 19446, "sum_num_payments": 38279, "sum_incomes": 1937506.4499999993}, {"cp_dest": 28017, "sum_num_cards": 16907, "sum_num_payments": 37020, "sum_incomes": 1184792.07}, {"cp_dest": 28016, "sum_num_cards": 6073, "sum_num_payments": 11897, "sum_incomes": 618112.8800000002}, {"cp_dest": 28015, "sum_num_cards": 11690, "sum_num_payments": 22184, "sum_incomes": 775927.1200000006}, {"cp_dest": 28011, "sum_num_cards": 4373, "sum_num_payments": 7879, "sum_incomes": 238279.64999999997}, {"cp_dest": 28041, "sum_num_cards": 14033, "sum_num_payments": 28053, "sum_incomes": 1090744.4399999997}, {"cp_dest": 28029, "sum_num_cards": 19348, "sum_num_payments": 31747, "sum_incomes": 1621728.7799999989}, {"cp_dest": 28008, "sum_num_cards": 6203, "sum_num_payments": 12918, "sum_incomes": 475346.18}, {"cp_dest": 28007, "sum_num_cards": 18367, "sum_num_payments": 46514, "sum_incomes": 1628542.6599999992}, {"cp_dest": 28024, "sum_num_cards": 4200, "sum_num_payments": 8052, "sum_incomes": 257210.78000000017}, {"cp_dest": 28006, "sum_num_cards": 14148, "sum_num_payments": 22773, "sum_incomes": 880934.7999999993}, {"cp_dest": 28003, "sum_num_cards": 10480, "sum_num_payments": 20529, "sum_incomes": 734290.5900000003}, {"cp_dest": 28001, "sum_num_cards": 17187, "sum_num_payments": 26385, "sum_incomes": 932584.72}, {"cp_dest": 28004, "sum_num_cards": 9553, "sum_num_payments": 16602, "sum_incomes": 408884.6099999995}, {"cp_dest": 28019, "sum_num_cards": 11138, "sum_num_payments": 23676, "sum_incomes": 716306.9999999998}, {"cp_dest": 28012, "sum_num_cards": 8812, "sum_num_payments": 15104, "sum_incomes": 442030.70000000036}, {"cp_dest": 28031, "sum_num_cards": 12278, "sum_num_payments": 28226, "sum_incomes": 1034153.4100000004}, {"cp_dest": 28036, "sum_num_cards": 6893, "sum_num_payments": 14396, "sum_incomes": 529117.9000000001}, {"cp_dest": 28020, "sum_num_cards": 25020, "sum_num_payments": 48620, "sum_incomes": 1648797.1199999987}, {"cp_dest": 28034, "sum_num_cards": 22534, "sum_num_payments": 46872, "sum_incomes": 2143263.360000003}, {"cp_dest": 28045, "sum_num_cards": 22538, "sum_num_payments": 58644, "sum_incomes": 1880881.9999999974}, {"cp_dest": 28002, "sum_num_cards": 14621, "sum_num_payments": 34199, "sum_incomes": 1041114.3400000002}, {"cp_dest": 28026, "sum_num_cards": 12835, "sum_num_payments": 29091, "sum_incomes": 968963.1000000002}, {"cp_dest": 28014, "sum_num_cards": 5197, "sum_num_payments": 7394, "sum_incomes": 267061.37}, {"cp_dest": 28018, "sum_num_cards": 13838, "sum_num_payments": 28554, "sum_incomes": 1012295.0300000004}, {"cp_dest": 28030, "sum_num_cards": 23518, "sum_num_payments": 49355, "sum_incomes": 2056312.4099999995}, {"cp_dest": 28033, "sum_num_cards": 11260, "sum_num_payments": 26890, "sum_incomes": 963682.4599999994}, {"cp_dest": 28025, "sum_num_cards": 21424, "sum_num_payments": 43109, "sum_incomes": 1634874.7599999986}, {"cp_dest": 28010, "sum_num_cards": 5174, "sum_num_payments": 9656, "sum_incomes": 337090.51}, {"cp_dest": 28037, "sum_num_cards": 39235, "sum_num_payments": 60927, "sum_incomes": 1200331.9299999988}, {"cp_dest": 28032, "sum_num_cards": 15393, "sum_num_payments": 33570, "sum_incomes": 1403765.3000000003}, {"cp_dest": 28005, "sum_num_cards": 19721, "sum_num_payments": 45389, "sum_incomes": 1782436.2800000005}, {"cp_dest": 28023, "sum_num_cards": 12366, "sum_num_payments": 22837, "sum_incomes": 1376670.109999999}, {"cp_dest": 28044, "sum_num_cards": 9677, "sum_num_payments": 17500, "sum_incomes": 626485.3400000002}, {"cp_dest": 28009, "sum_num_cards": 7502, "sum_num_payments": 14560, "sum_incomes": 473082.55999999994}, {"cp_dest": 28051, "sum_num_cards": 15420, "sum_num_payments": 32707, "sum_incomes": 1183651.7499999995}, {"cp_dest": 28013, "sum_num_cards": 2126, "sum_num_payments": 3216, "sum_incomes": 79520.32999999994}, {"cp_dest": 28047, "sum_num_cards": 13339, "sum_num_payments": 26144, "sum_incomes": 1142242.3299999994}]}, {"_id": "Salud", "cps": [{"cp_dest": 28054, "sum_num_cards": 3160, "sum_num_payments": 4062, "sum_incomes": 148062.05000000016}, {"cp_dest": 28051, "sum_num_cards": 3481, "sum_num_payments": 4484, "sum_incomes": 132411.99000000005}, {"cp_dest": 28050, "sum_num_cards": 11565, "sum_num_payments": 16186, "sum_incomes": 747613.5200000007}, {"cp_dest": 28049, "sum_num_cards": 738, "sum_num_payments": 919, "sum_incomes": 29142.66000000001}, {"cp_dest": 28047, "sum_num_cards": 2950, "sum_num_payments": 3739, "sum_incomes": 191772.9800000001}, {"cp_dest": 28045, "sum_num_cards": 8465, "sum_num_payments": 11350, "sum_incomes": 573149.3600000002}, {"cp_dest": 28044, "sum_num_cards": 5215, "sum_num_payments": 6489, "sum_incomes": 282446.8899999999}, {"cp_dest": 28043, "sum_num_cards": 9622, "sum_num_payments": 12665, "sum_incomes": 824168.1999999994}, {"cp_dest": 28040, "sum_num_cards": 1195, "sum_num_payments": 1366, "sum_incomes": 180931.87}, {"cp_dest": 28038, "sum_num_cards": 3471, "sum_num_payments": 4397, "sum_incomes": 228070.37999999998}, {"cp_dest": 28037, "sum_num_cards": 2873, "sum_num_payments": 3711, "sum_incomes": 144340.05000000005}, {"cp_dest": 28035, "sum_num_cards": 5457, "sum_num_payments": 7260, "sum_incomes": 455263.4000000005}, {"cp_dest": 28033, "sum_num_cards": 7127, "sum_num_payments": 9584, "sum_incomes": 563172.0200000001}, {"cp_dest": 28032, "sum_num_cards": 5885, "sum_num_payments": 7899, "sum_incomes": 324194.8899999999}, {"cp_dest": 28030, "sum_num_cards": 6816, "sum_num_payments": 8967, "sum_incomes": 526839.6599999998}, {"cp_dest": 28028, "sum_num_cards": 6691, "sum_num_payments": 8479, "sum_incomes": 533070.2400000005}, {"cp_dest": 28027, "sum_num_cards": 8120, "sum_num_payments": 10561, "sum_incomes": 600373.4400000002}, {"cp_dest": 28024, "sum_num_cards": 2323, "sum_num_payments": 2959, "sum_incomes": 182896.24000000002}, {"cp_dest": 28023, "sum_num_cards": 2624, "sum_num_payments": 3769, "sum_incomes": 256217.85}, {"cp_dest": 28022, "sum_num_cards": 6337, "sum_num_payments": 8500, "sum_incomes": 359067.18999999977}, {"cp_dest": 28020, "sum_num_cards": 10754, "sum_num_payments": 13641, "sum_incomes": 1057330.6199999999}, {"cp_dest": 28019, "sum_num_cards": 3641, "sum_num_payments": 4498, "sum_incomes": 218056.38000000006}, {"cp_dest": 28017, "sum_num_cards": 4313, "sum_num_payments": 5513, "sum_incomes": 265396.97000000003}, {"cp_dest": 28015, "sum_num_cards": 8816, "sum_num_payments": 11324, "sum_incomes": 1007263.6600000001}, {"cp_dest": 28014, "sum_num_cards": 2207, "sum_num_payments": 2719, "sum_incomes": 197428.40999999992}, {"cp_dest": 28013, "sum_num_cards": 7356, "sum_num_payments": 8776, "sum_incomes": 391741.46999999986}, {"cp_dest": 28010, "sum_num_cards": 9583, "sum_num_payments": 12415, "sum_incomes": 1028760.4699999994}, {"cp_dest": 28006, "sum_num_cards": 10760, "sum_num_payments": 13413, "sum_incomes": 1196719.1200000003}, {"cp_dest": 28042, "sum_num_cards": 4580, "sum_num_payments": 6010, "sum_incomes": 250679.28999999998}, {"cp_dest": 28005, "sum_num_cards": 7151, "sum_num_payments": 9455, "sum_incomes": 484518.09000000026}, {"cp_dest": 28002, "sum_num_cards": 10449, "sum_num_payments": 14120, "sum_incomes": 1119543.3199999996}, {"cp_dest": 28001, "sum_num_cards": 10139, "sum_num_payments": 13013, "sum_incomes": 1019833.2099999997}, {"cp_dest": 28021, "sum_num_cards": 3267, "sum_num_payments": 4359, "sum_incomes": 230880.93}, {"cp_dest": 28029, "sum_num_cards": 9793, "sum_num_payments": 12559, "sum_incomes": 651181.9300000002}, {"cp_dest": 28026, "sum_num_cards": 2656, "sum_num_payments": 3550, "sum_incomes": 194973.84999999995}, {"cp_dest": 28039, "sum_num_cards": 3549, "sum_num_payments": 4601, "sum_incomes": 191051.62999999995}, {"cp_dest": 28003, "sum_num_cards": 8392, "sum_num_payments": 10507, "sum_incomes": 982394.4699999996}, {"cp_dest": 28018, "sum_num_cards": 2883, "sum_num_payments": 3725, "sum_incomes": 162300.91999999998}, {"cp_dest": 28053, "sum_num_cards": 1532, "sum_num_payments": 1860, "sum_incomes": 86081.33}, {"cp_dest": 28031, "sum_num_cards": 4133, "sum_num_payments": 5417, "sum_incomes": 219893.2600000001}, {"cp_dest": 28008, "sum_num_cards": 6359, "sum_num_payments": 8153, "sum_incomes": 596317.9499999995}, {"cp_dest": 28012, "sum_num_cards": 5942, "sum_num_payments": 7393, "sum_incomes": 422915.3600000003}, {"cp_dest": 28046, "sum_num_cards": 5692, "sum_num_payments": 7001, "sum_incomes": 399269.40000000014}, {"cp_dest": 28007, "sum_num_cards": 8347, "sum_num_payments": 11323, "sum_incomes": 755470.2199999996}, {"cp_dest": 28025, "sum_num_cards": 3929, "sum_num_payments": 4902, "sum_incomes": 357580.7099999998}, {"cp_dest": 28004, "sum_num_cards": 6644, "sum_num_payments": 8220, "sum_incomes": 463329.9199999997}, {"cp_dest": 28016, "sum_num_cards": 7192, "sum_num_payments": 9489, "sum_incomes": 591746.0000000003}, {"cp_dest": 28009, "sum_num_cards": 11394, "sum_num_payments": 14456, "sum_incomes": 1125359.7999999996}, {"cp_dest": 28036, "sum_num_cards": 6674, "sum_num_payments": 8393, "sum_incomes": 546374.0099999994}, {"cp_dest": 28041, "sum_num_cards": 4044, "sum_num_payments": 5322, "sum_incomes": 239593.23}, {"cp_dest": 28034, "sum_num_cards": 8680, "sum_num_payments": 11846, "sum_incomes": 1016494.81}, {"cp_dest": 28011, "sum_num_cards": 4027, "sum_num_payments": 5105, "sum_incomes": 297851.17}]}, {"_id": "Hogar", "cps": [{"cp_dest": 28054, "sum_num_cards": 2205, "sum_num_payments": 2547, "sum_incomes": 76671.5}, {"cp_dest": 28053, "sum_num_cards": 295, "sum_num_payments": 322, "sum_incomes": 25606.780000000006}, {"cp_dest": 28052, "sum_num_cards": 26, "sum_num_payments": 30, "sum_incomes": 2922.76}, {"cp_dest": 28051, "sum_num_cards": 35399, "sum_num_payments": 43375, "sum_incomes": 3034664.149999999}, {"cp_dest": 28050, "sum_num_cards": 1776, "sum_num_payments": 2045, "sum_incomes": 126882.23999999995}, {"cp_dest": 28047, "sum_num_cards": 448, "sum_num_payments": 501, "sum_incomes": 46819.64}, {"cp_dest": 28045, "sum_num_cards": 2852, "sum_num_payments": 3369, "sum_incomes": 257433.10999999987}, {"cp_dest": 28042, "sum_num_cards": 250, "sum_num_payments": 283, "sum_incomes": 14371.929999999998}, {"cp_dest": 28041, "sum_num_cards": 144, "sum_num_payments": 152, "sum_incomes": 10466.630000000001}, {"cp_dest": 28038, "sum_num_cards": 926, "sum_num_payments": 1034, "sum_incomes": 66732.46999999999}, {"cp_dest": 28037, "sum_num_cards": 945, "sum_num_payments": 1215, "sum_incomes": 161204.13000000006}, {"cp_dest": 28036, "sum_num_cards": 2427, "sum_num_payments": 2886, "sum_incomes": 199383.77000000008}, {"cp_dest": 28034, "sum_num_cards": 457, "sum_num_payments": 506, "sum_incomes": 59041.99}, {"cp_dest": 28033, "sum_num_cards": 513, "sum_num_payments": 577, "sum_incomes": 30692.67}, {"cp_dest": 28031, "sum_num_cards": 370, "sum_num_payments": 429, "sum_incomes": 32543.469999999998}, {"cp_dest": 28029, "sum_num_cards": 5197, "sum_num_payments": 6084, "sum_incomes": 246695.3199999998}, {"cp_dest": 28027, "sum_num_cards": 2535, "sum_num_payments": 2832, "sum_incomes": 175504.1100000001}, {"cp_dest": 28026, "sum_num_cards": 356, "sum_num_payments": 413, "sum_incomes": 45864.84}, {"cp_dest": 28025, "sum_num_cards": 950, "sum_num_payments": 1079, "sum_incomes": 84155.55000000003}, {"cp_dest": 28022, "sum_num_cards": 3547, "sum_num_payments": 4008, "sum_incomes": 168225.32000000012}, {"cp_dest": 28021, "sum_num_cards": 569, "sum_num_payments": 647, "sum_incomes": 55108.830000000016}, {"cp_dest": 28020, "sum_num_cards": 4413, "sum_num_payments": 5340, "sum_incomes": 440663.2599999999}, {"cp_dest": 28019, "sum_num_cards": 1178, "sum_num_payments": 1330, "sum_incomes": 141236.89999999997}, {"cp_dest": 28043, "sum_num_cards": 2190, "sum_num_payments": 2553, "sum_incomes": 142250.93}, {"cp_dest": 28018, "sum_num_cards": 371, "sum_num_payments": 411, "sum_incomes": 34892.24}, {"cp_dest": 28013, "sum_num_cards": 570, "sum_num_payments": 605, "sum_incomes": 44670.12}, {"cp_dest": 28011, "sum_num_cards": 859, "sum_num_payments": 973, "sum_incomes": 57233.90999999999}, {"cp_dest": 28006, "sum_num_cards": 4177, "sum_num_payments": 4821, "sum_incomes": 468774.78000000026}, {"cp_dest": 28005, "sum_num_cards": 1774, "sum_num_payments": 1964, "sum_incomes": 142876.52}, {"cp_dest": 28004, "sum_num_cards": 3507, "sum_num_payments": 3971, "sum_incomes": 189199.20999999993}, {"cp_dest": 28003, "sum_num_cards": 991, "sum_num_payments": 1090, "sum_incomes": 111401.80000000005}, {"cp_dest": 28002, "sum_num_cards": 2210, "sum_num_payments": 2505, "sum_incomes": 210817.84000000014}, {"cp_dest": 28001, "sum_num_cards": 7033, "sum_num_payments": 8437, "sum_incomes": 716949.9299999999}, {"cp_dest": 28039, "sum_num_cards": 360, "sum_num_payments": 416, "sum_incomes": 34625.979999999996}, {"cp_dest": 28008, "sum_num_cards": 2414, "sum_num_payments": 2806, "sum_incomes": 134376.88999999998}, {"cp_dest": 28017, "sum_num_cards": 702, "sum_num_payments": 828, "sum_incomes": 70918.38000000002}, {"cp_dest": 28030, "sum_num_cards": 617, "sum_num_payments": 681, "sum_incomes": 45736.549999999996}, {"cp_dest": 28016, "sum_num_cards": 1026, "sum_num_payments": 1148, "sum_incomes": 84111.94999999997}, {"cp_dest": 28028, "sum_num_cards": 1876, "sum_num_payments": 2076, "sum_incomes": 185549.00999999992}, {"cp_dest": 28035, "sum_num_cards": 353, "sum_num_payments": 386, "sum_incomes": 23498.85}, {"cp_dest": 28007, "sum_num_cards": 932, "sum_num_payments": 1031, "sum_incomes": 83476.24999999996}, {"cp_dest": 28015, "sum_num_cards": 1699, "sum_num_payments": 1919, "sum_incomes": 127446.26000000001}, {"cp_dest": 28044, "sum_num_cards": 347, "sum_num_payments": 386, "sum_incomes": 18853.57}, {"cp_dest": 28010, "sum_num_cards": 1346, "sum_num_payments": 1495, "sum_incomes": 117426.48999999993}, {"cp_dest": 28032, "sum_num_cards": 1684, "sum_num_payments": 1990, "sum_incomes": 110620.36}, {"cp_dest": 28023, "sum_num_cards": 697, "sum_num_payments": 772, "sum_incomes": 31755.489999999987}, {"cp_dest": 28024, "sum_num_cards": 268, "sum_num_payments": 298, "sum_incomes": 22744.75}, {"cp_dest": 28009, "sum_num_cards": 1038, "sum_num_payments": 1143, "sum_incomes": 137661.32999999993}, {"cp_dest": 28012, "sum_num_cards": 1153, "sum_num_payments": 1507, "sum_incomes": 115128.23}, {"cp_dest": 28014, "sum_num_cards": 170, "sum_num_payments": 182, "sum_incomes": 12447.8}, {"cp_dest": 28046, "sum_num_cards": 1531, "sum_num_payments": 1725, "sum_incomes": 159967.16999999987}]}, {"_id": "Automoción", "cps": [{"cp_dest": 28054, "sum_num_cards": 209, "sum_num_payments": 222, "sum_incomes": 53126.39}, {"cp_dest": 28053, "sum_num_cards": 169, "sum_num_payments": 182, "sum_incomes": 41798.979999999996}, {"cp_dest": 28052, "sum_num_cards": 50, "sum_num_payments": 53, "sum_incomes": 14393.310000000001}, {"cp_dest": 28051, "sum_num_cards": 10, "sum_num_payments": 11, "sum_incomes": 2077.3199999999997}, {"cp_dest": 28050, "sum_num_cards": 1095, "sum_num_payments": 1182, "sum_incomes": 342226.55000000005}, {"cp_dest": 28047, "sum_num_cards": 329, "sum_num_payments": 357, "sum_incomes": 73668.42}, {"cp_dest": 28045, "sum_num_cards": 1232, "sum_num_payments": 1313, "sum_incomes": 231060.46000000005}, {"cp_dest": 28041, "sum_num_cards": 1566, "sum_num_payments": 1708, "sum_incomes": 216197.94999999984}, {"cp_dest": 28040, "sum_num_cards": 214, "sum_num_payments": 224, "sum_incomes": 90675.5}, {"cp_dest": 28039, "sum_num_cards": 1181, "sum_num_payments": 1243, "sum_incomes": 331062.6700000001}, {"cp_dest": 28037, "sum_num_cards": 1013, "sum_num_payments": 1093, "sum_incomes": 254469.00000000003}, {"cp_dest": 28036, "sum_num_cards": 1500, "sum_num_payments": 1691, "sum_incomes": 246120.3600000001}, {"cp_dest": 28035, "sum_num_cards": 270, "sum_num_payments": 288, "sum_incomes": 73423.40000000001}, {"cp_dest": 28044, "sum_num_cards": 907, "sum_num_payments": 972, "sum_incomes": 265243.36000000004}, {"cp_dest": 28034, "sum_num_cards": 1521, "sum_num_payments": 1616, "sum_incomes": 591870.5400000003}, {"cp_dest": 28033, "sum_num_cards": 551, "sum_num_payments": 582, "sum_incomes": 123943.39000000001}, {"cp_dest": 28031, "sum_num_cards": 1223, "sum_num_payments": 1344, "sum_incomes": 231788.59999999992}, {"cp_dest": 28028, "sum_num_cards": 1531, "sum_num_payments": 1667, "sum_incomes": 434813.4700000002}, {"cp_dest": 28026, "sum_num_cards": 773, "sum_num_payments": 841, "sum_incomes": 142044.29000000007}, {"cp_dest": 28024, "sum_num_cards": 393, "sum_num_payments": 426, "sum_incomes": 86855.26000000001}, {"cp_dest": 28022, "sum_num_cards": 1071, "sum_num_payments": 1169, "sum_incomes": 291139.2400000001}, {"cp_dest": 28020, "sum_num_cards": 832, "sum_num_payments": 872, "sum_incomes": 238614.4900000001}, {"cp_dest": 28019, "sum_num_cards": 1054, "sum_num_payments": 1135, "sum_incomes": 210749.66}, {"cp_dest": 28025, "sum_num_cards": 725, "sum_num_payments": 782, "sum_incomes": 153392.56999999998}, {"cp_dest": 28043, "sum_num_cards": 645, "sum_num_payments": 697, "sum_incomes": 159219.18999999994}, {"cp_dest": 28018, "sum_num_cards": 247, "sum_num_payments": 265, "sum_incomes": 28692.71000000001}, {"cp_dest": 28017, "sum_num_cards": 1146, "sum_num_payments": 1211, "sum_incomes": 209598.25}, {"cp_dest": 28046, "sum_num_cards": 111, "sum_num_payments": 118, "sum_incomes": 46673.2}, {"cp_dest": 28021, "sum_num_cards": 662, "sum_num_payments": 723, "sum_incomes": 135619.11000000002}, {"cp_dest": 28016, "sum_num_cards": 410, "sum_num_payments": 433, "sum_incomes": 175554.53}, {"cp_dest": 28038, "sum_num_cards": 245, "sum_num_payments": 254, "sum_incomes": 40717.6}, {"cp_dest": 28030, "sum_num_cards": 543, "sum_num_payments": 573, "sum_incomes": 109631.81000000001}, {"cp_dest": 28012, "sum_num_cards": 1156, "sum_num_payments": 1290, "sum_incomes": 160368.36000000007}, {"cp_dest": 28027, "sum_num_cards": 1349, "sum_num_payments": 1499, "sum_incomes": 355338.20999999996}, {"cp_dest": 28008, "sum_num_cards": 168, "sum_num_payments": 181, "sum_incomes": 47362.369999999995}, {"cp_dest": 28029, "sum_num_cards": 1263, "sum_num_payments": 1356, "sum_incomes": 355003.1099999998}, {"cp_dest": 28042, "sum_num_cards": 541, "sum_num_payments": 592, "sum_incomes": 148097.68999999994}, {"cp_dest": 28023, "sum_num_cards": 236, "sum_num_payments": 258, "sum_incomes": 64722.14}, {"cp_dest": 28010, "sum_num_cards": 248, "sum_num_payments": 265, "sum_incomes": 68752.05999999997}, {"cp_dest": 28007, "sum_num_cards": 2677, "sum_num_payments": 2889, "sum_incomes": 691421.9200000005}, {"cp_dest": 28006, "sum_num_cards": 815, "sum_num_payments": 876, "sum_incomes": 197801.6400000001}, {"cp_dest": 28011, "sum_num_cards": 492, "sum_num_payments": 515, "sum_incomes": 125836.83}, {"cp_dest": 28005, "sum_num_cards": 380, "sum_num_payments": 400, "sum_incomes": 98741.40000000002}, {"cp_dest": 28009, "sum_num_cards": 726, "sum_num_payments": 758, "sum_incomes": 188997.15999999995}, {"cp_dest": 28015, "sum_num_cards": 1722, "sum_num_payments": 1847, "sum_incomes": 512735.77000000014}, {"cp_dest": 28004, "sum_num_cards": 61, "sum_num_payments": 69, "sum_incomes": 7804.65}, {"cp_dest": 28014, "sum_num_cards": 77, "sum_num_payments": 88, "sum_incomes": 15173.649999999998}, {"cp_dest": 28032, "sum_num_cards": 146, "sum_num_payments": 156, "sum_incomes": 30558.1}, {"cp_dest": 28002, "sum_num_cards": 1466, "sum_num_payments": 1555, "sum_incomes": 361477.02999999985}, {"cp_dest": 28003, "sum_num_cards": 1583, "sum_num_payments": 1706, "sum_incomes": 413034.21999999986}, {"cp_dest": 28001, "sum_num_cards": 1677, "sum_num_payments": 1719, "sum_incomes": 174278.31999999992}]}, {"_id": "Hipermercados", "cps": [{"cp_dest": 28050, "sum_num_cards": 40662, "sum_num_payments": 81528, "sum_incomes": 4936092.890000008}, {"cp_dest": 28043, "sum_num_cards": 27524, "sum_num_payments": 50723, "sum_incomes": 2616221.620000001}, {"cp_dest": 28029, "sum_num_cards": 57954, "sum_num_payments": 119008, "sum_incomes": 5409084.159999998}, {"cp_dest": 28027, "sum_num_cards": 11545, "sum_num_payments": 61065, "sum_incomes": 5758826.4300000025}, {"cp_dest": 28024, "sum_num_cards": 1184, "sum_num_payments": 2662, "sum_incomes": 73658.47000000003}, {"cp_dest": 28038, "sum_num_cards": 24970, "sum_num_payments": 45946, "sum_incomes": 1917760.2299999993}, {"cp_dest": 28022, "sum_num_cards": 13665, "sum_num_payments": 21021, "sum_incomes": 2274006.880000001}, {"cp_dest": 28020, "sum_num_cards": 5842, "sum_num_payments": 11506, "sum_incomes": 323895.1299999999}, {"cp_dest": 28019, "sum_num_cards": 3669, "sum_num_payments": 6314, "sum_incomes": 180597.3899999999}, {"cp_dest": 28016, "sum_num_cards": 26447, "sum_num_payments": 57954, "sum_incomes": 2764858.490000001}, {"cp_dest": 28013, "sum_num_cards": 51117, "sum_num_payments": 85960, "sum_incomes": 4123926.8600000003}, {"cp_dest": 28012, "sum_num_cards": 5579, "sum_num_payments": 10825, "sum_incomes": 303964.60000000015}, {"cp_dest": 28009, "sum_num_cards": 42130, "sum_num_payments": 75374, "sum_incomes": 3951092.689999998}, {"cp_dest": 28001, "sum_num_cards": 6870, "sum_num_payments": 12290, "sum_incomes": 565312.1200000001}, {"cp_dest": 28007, "sum_num_cards": 5408, "sum_num_payments": 11087, "sum_incomes": 397900.6099999999}, {"cp_dest": 28006, "sum_num_cards": 18478, "sum_num_payments": 36272, "sum_incomes": 1773174.3999999983}, {"cp_dest": 28005, "sum_num_cards": 8378, "sum_num_payments": 15554, "sum_incomes": 479924.57999999984}, {"cp_dest": 28008, "sum_num_cards": 24706, "sum_num_payments": 44963, "sum_incomes": 2291255.970000002}, {"cp_dest": 28002, "sum_num_cards": 10444, "sum_num_payments": 22518, "sum_incomes": 693831.6500000003}, {"cp_dest": 28045, "sum_num_cards": 18178, "sum_num_payments": 31171, "sum_incomes": 1658164.0299999993}, {"cp_dest": 28041, "sum_num_cards": 18092, "sum_num_payments": 30140, "sum_incomes": 1665275.4300000016}, {"cp_dest": 28039, "sum_num_cards": 1800, "sum_num_payments": 3044, "sum_incomes": 92242.54}, {"cp_dest": 28023, "sum_num_cards": 48759, "sum_num_payments": 83115, "sum_incomes": 5338093.120000004}, {"cp_dest": 28033, "sum_num_cards": 3960, "sum_num_payments": 8499, "sum_incomes": 291426.18000000005}, {"cp_dest": 28034, "sum_num_cards": 7197, "sum_num_payments": 14448, "sum_incomes": 550115.2999999998}, {"cp_dest": 28030, "sum_num_cards": 30029, "sum_num_payments": 58206, "sum_incomes": 2986888.170000003}, {"cp_dest": 28010, "sum_num_cards": 8223, "sum_num_payments": 15844, "sum_incomes": 546243.2199999995}, {"cp_dest": 28003, "sum_num_cards": 56220, "sum_num_payments": 109922, "sum_incomes": 6541418.669999994}, {"cp_dest": 28015, "sum_num_cards": 12913, "sum_num_payments": 27808, "sum_incomes": 866425.5500000003}, {"cp_dest": 28021, "sum_num_cards": 2212, "sum_num_payments": 3524, "sum_incomes": 96025.67}, {"cp_dest": 28035, "sum_num_cards": 3643, "sum_num_payments": 8580, "sum_incomes": 287892.8}, {"cp_dest": 28025, "sum_num_cards": 9832, "sum_num_payments": 16614, "sum_incomes": 666120.7999999997}, {"cp_dest": 28042, "sum_num_cards": 28745, "sum_num_payments": 43935, "sum_incomes": 2615542.3999999994}, {"cp_dest": 28011, "sum_num_cards": 5838, "sum_num_payments": 12712, "sum_incomes": 361078.0900000004}, {"cp_dest": 28028, "sum_num_cards": 8965, "sum_num_payments": 19617, "sum_incomes": 633235.9899999999}]}, {"_id": "Ocio", "cps": [{"cp_dest": 28043, "sum_num_cards": 3186, "sum_num_payments": 3921, "sum_incomes": 135532.95}, {"cp_dest": 28037, "sum_num_cards": 28, "sum_num_payments": 30, "sum_incomes": 4367.18}, {"cp_dest": 28036, "sum_num_cards": 2109, "sum_num_payments": 2362, "sum_incomes": 270237.35000000003}, {"cp_dest": 28035, "sum_num_cards": 1019, "sum_num_payments": 1321, "sum_incomes": 110474.65999999999}, {"cp_dest": 28027, "sum_num_cards": 329, "sum_num_payments": 573, "sum_incomes": 28870.950000000004}, {"cp_dest": 28014, "sum_num_cards": 1597, "sum_num_payments": 1744, "sum_incomes": 76301.53999999998}, {"cp_dest": 28011, "sum_num_cards": 1904, "sum_num_payments": 2469, "sum_incomes": 141550.91999999995}, {"cp_dest": 28010, "sum_num_cards": 358, "sum_num_payments": 374, "sum_incomes": 22799.04}, {"cp_dest": 28007, "sum_num_cards": 26, "sum_num_payments": 28, "sum_incomes": 2289}, {"cp_dest": 28003, "sum_num_cards": 802, "sum_num_payments": 1053, "sum_incomes": 66200.79}, {"cp_dest": 28001, "sum_num_cards": 121, "sum_num_payments": 169, "sum_incomes": 21246.670000000002}, {"cp_dest": 28012, "sum_num_cards": 2842, "sum_num_payments": 3272, "sum_incomes": 116782.34999999998}, {"cp_dest": 28018, "sum_num_cards": 92, "sum_num_payments": 113, "sum_incomes": 9988.900000000001}, {"cp_dest": 28038, "sum_num_cards": 306, "sum_num_payments": 523, "sum_incomes": 30433.250000000004}, {"cp_dest": 28033, "sum_num_cards": 123, "sum_num_payments": 151, "sum_incomes": 9207.38}, {"cp_dest": 28045, "sum_num_cards": 1818, "sum_num_payments": 2213, "sum_incomes": 65668.11000000002}, {"cp_dest": 28006, "sum_num_cards": 684, "sum_num_payments": 764, "sum_incomes": 40974.88999999997}, {"cp_dest": 28015, "sum_num_cards": 3390, "sum_num_payments": 3928, "sum_incomes": 120384.7}, {"cp_dest": 28020, "sum_num_cards": 277, "sum_num_payments": 612, "sum_incomes": 54777.6}, {"cp_dest": 28008, "sum_num_cards": 3055, "sum_num_payments": 3540, "sum_incomes": 99471.0700000001}, {"cp_dest": 28004, "sum_num_cards": 842, "sum_num_payments": 925, "sum_incomes": 56482.759999999995}, {"cp_dest": 28002, "sum_num_cards": 13, "sum_num_payments": 16, "sum_incomes": 1971.47}, {"cp_dest": 28042, "sum_num_cards": 861, "sum_num_payments": 965, "sum_incomes": 57254.89000000004}, {"cp_dest": 28032, "sum_num_cards": 901, "sum_num_payments": 1013, "sum_incomes": 43976.53000000001}, {"cp_dest": 28019, "sum_num_cards": 38, "sum_num_payments": 62, "sum_incomes": 8762.1}, {"cp_dest": 28009, "sum_num_cards": 1180, "sum_num_payments": 1370, "sum_incomes": 72686.36000000003}, {"cp_dest": 28005, "sum_num_cards": 262, "sum_num_payments": 284, "sum_incomes": 42077.2}, {"cp_dest": 28013, "sum_num_cards": 1601, "sum_num_payments": 1831, "sum_incomes": 155093.81999999995}, {"cp_dest": 28021, "sum_num_cards": 6, "sum_num_payments": 8, "sum_incomes": 272.8}]}, {"_id": "Otros servicios", "cps": [{"cp_dest": 28054, "sum_num_cards": 370, "sum_num_payments": 415, "sum_incomes": 19188.400000000005}, {"cp_dest": 28051, "sum_num_cards": 7606, "sum_num_payments": 8704, "sum_incomes": 204958.94999999998}, {"cp_dest": 28050, "sum_num_cards": 2695, "sum_num_payments": 4024, "sum_incomes": 155287.12000000008}, {"cp_dest": 28049, "sum_num_cards": 607, "sum_num_payments": 725, "sum_incomes": 20349.86}, {"cp_dest": 28047, "sum_num_cards": 1347, "sum_num_payments": 1866, "sum_incomes": 98410.05999999998}, {"cp_dest": 28046, "sum_num_cards": 1044, "sum_num_payments": 1189, "sum_incomes": 150344.7600000001}, {"cp_dest": 28045, "sum_num_cards": 5015, "sum_num_payments": 6395, "sum_incomes": 444736.8499999999}, {"cp_dest": 28042, "sum_num_cards": 11163, "sum_num_payments": 13098, "sum_incomes": 809031.9899999995}, {"cp_dest": 28041, "sum_num_cards": 1659, "sum_num_payments": 2275, "sum_incomes": 98538.78000000001}, {"cp_dest": 28038, "sum_num_cards": 2674, "sum_num_payments": 3472, "sum_incomes": 219087.27000000014}, {"cp_dest": 28037, "sum_num_cards": 3738, "sum_num_payments": 4940, "sum_incomes": 469250.58999999997}, {"cp_dest": 28036, "sum_num_cards": 2104, "sum_num_payments": 2468, "sum_incomes": 150176.99999999997}, {"cp_dest": 28034, "sum_num_cards": 2539, "sum_num_payments": 3274, "sum_incomes": 155013.63}, {"cp_dest": 28032, "sum_num_cards": 2268, "sum_num_payments": 3084, "sum_incomes": 113630.34999999995}, {"cp_dest": 28031, "sum_num_cards": 2277, "sum_num_payments": 3069, "sum_incomes": 155840.31000000006}, {"cp_dest": 28040, "sum_num_cards": 750, "sum_num_payments": 952, "sum_incomes": 57447.79}, {"cp_dest": 28029, "sum_num_cards": 7777, "sum_num_payments": 9501, "sum_incomes": 350834.2199999998}, {"cp_dest": 28027, "sum_num_cards": 5953, "sum_num_payments": 8103, "sum_incomes": 429350.0}, {"cp_dest": 28026, "sum_num_cards": 1157, "sum_num_payments": 1443, "sum_incomes": 69952.02}, {"cp_dest": 28023, "sum_num_cards": 4671, "sum_num_payments": 6641, "sum_incomes": 150401.34999999992}, {"cp_dest": 28020, "sum_num_cards": 6053, "sum_num_payments": 7803, "sum_incomes": 333599.62}, {"cp_dest": 28019, "sum_num_cards": 2255, "sum_num_payments": 3218, "sum_incomes": 135234.75}, {"cp_dest": 28018, "sum_num_cards": 1791, "sum_num_payments": 2450, "sum_incomes": 128214.38999999996}, {"cp_dest": 28017, "sum_num_cards": 2915, "sum_num_payments": 4435, "sum_incomes": 178969.28000000014}, {"cp_dest": 28016, "sum_num_cards": 3476, "sum_num_payments": 4314, "sum_incomes": 230378.42}, {"cp_dest": 28011, "sum_num_cards": 1787, "sum_num_payments": 2449, "sum_incomes": 102571.09999999999}, {"cp_dest": 28009, "sum_num_cards": 5151, "sum_num_payments": 6276, "sum_incomes": 416387.74999999994}, {"cp_dest": 28008, "sum_num_cards": 4231, "sum_num_payments": 4782, "sum_incomes": 206339.10000000006}, {"cp_dest": 28007, "sum_num_cards": 3995, "sum_num_payments": 5393, "sum_incomes": 275950.42}, {"cp_dest": 28002, "sum_num_cards": 20073, "sum_num_payments": 26441, "sum_incomes": 693795.0099999998}, {"cp_dest": 28022, "sum_num_cards": 3679, "sum_num_payments": 5270, "sum_incomes": 209116.01000000004}, {"cp_dest": 28028, "sum_num_cards": 2424, "sum_num_payments": 2803, "sum_incomes": 211897.60000000015}, {"cp_dest": 28030, "sum_num_cards": 2071, "sum_num_payments": 2657, "sum_incomes": 111246.68000000004}, {"cp_dest": 28044, "sum_num_cards": 805, "sum_num_payments": 984, "sum_incomes": 44937.10999999998}, {"cp_dest": 28014, "sum_num_cards": 2973, "sum_num_payments": 3621, "sum_incomes": 220442.76000000007}, {"cp_dest": 28053, "sum_num_cards": 859, "sum_num_payments": 1122, "sum_incomes": 40029.43999999999}, {"cp_dest": 28010, "sum_num_cards": 6156, "sum_num_payments": 7493, "sum_incomes": 994302.3200000001}, {"cp_dest": 28039, "sum_num_cards": 1829, "sum_num_payments": 2412, "sum_incomes": 100232.85999999993}, {"cp_dest": 28033, "sum_num_cards": 3055, "sum_num_payments": 4215, "sum_incomes": 207372.22}, {"cp_dest": 28024, "sum_num_cards": 897, "sum_num_payments": 1185, "sum_incomes": 42803.170000000006}, {"cp_dest": 28012, "sum_num_cards": 5198, "sum_num_payments": 6345, "sum_incomes": 314737.6300000001}, {"cp_dest": 28025, "sum_num_cards": 2157, "sum_num_payments": 2603, "sum_incomes": 137200.6000000001}, {"cp_dest": 28006, "sum_num_cards": 8403, "sum_num_payments": 11202, "sum_incomes": 494271.72999999963}, {"cp_dest": 28004, "sum_num_cards": 10778, "sum_num_payments": 13161, "sum_incomes": 724990.4500000001}, {"cp_dest": 28015, "sum_num_cards": 15053, "sum_num_payments": 17196, "sum_incomes": 794909.2300000001}, {"cp_dest": 28003, "sum_num_cards": 3800, "sum_num_payments": 5023, "sum_incomes": 353265.1099999999}, {"cp_dest": 28001, "sum_num_cards": 8565, "sum_num_payments": 9915, "sum_incomes": 779669.2899999997}, {"cp_dest": 28043, "sum_num_cards": 4480, "sum_num_payments": 5575, "sum_incomes": 261001.6899999999}, {"cp_dest": 28021, "sum_num_cards": 1337, "sum_num_payments": 1905, "sum_incomes": 82123.51}, {"cp_dest": 28005, "sum_num_cards": 15171, "sum_num_payments": 18309, "sum_incomes": 1028910.6399999992}, {"cp_dest": 28013, "sum_num_cards": 5125, "sum_num_payments": 5728, "sum_incomes": 365786.2899999999}, {"cp_dest": 28035, "sum_num_cards": 2395, "sum_num_payments": 3149, "sum_incomes": 160423.51000000004}]}, {"_id": "Deportes y juguetes", "cps": [{"cp_dest": 28050, "sum_num_cards": 9, "sum_num_payments": 10, "sum_incomes": 801.4}, {"cp_dest": 28046, "sum_num_cards": 1267, "sum_num_payments": 1391, "sum_incomes": 94608.85999999994}, {"cp_dest": 28045, "sum_num_cards": 629, "sum_num_payments": 685, "sum_incomes": 68043.09000000004}, {"cp_dest": 28044, "sum_num_cards": 774, "sum_num_payments": 828, "sum_incomes": 40600.119999999995}, {"cp_dest": 28043, "sum_num_cards": 2522, "sum_num_payments": 2795, "sum_incomes": 147650.24}, {"cp_dest": 28041, "sum_num_cards": 202, "sum_num_payments": 215, "sum_incomes": 9302.83}, {"cp_dest": 28036, "sum_num_cards": 815, "sum_num_payments": 861, "sum_incomes": 41040.31999999999}, {"cp_dest": 28035, "sum_num_cards": 688, "sum_num_payments": 968, "sum_incomes": 75693.27000000002}, {"cp_dest": 28034, "sum_num_cards": 981, "sum_num_payments": 1143, "sum_incomes": 108503.13000000003}, {"cp_dest": 28031, "sum_num_cards": 1805, "sum_num_payments": 1942, "sum_incomes": 63809.680000000015}, {"cp_dest": 28030, "sum_num_cards": 174, "sum_num_payments": 189, "sum_incomes": 10773.560000000003}, {"cp_dest": 28029, "sum_num_cards": 4473, "sum_num_payments": 4967, "sum_incomes": 227819.56000000008}, {"cp_dest": 28028, "sum_num_cards": 356, "sum_num_payments": 397, "sum_incomes": 27619.809999999994}, {"cp_dest": 28027, "sum_num_cards": 1544, "sum_num_payments": 1656, "sum_incomes": 100971.91999999997}, {"cp_dest": 28026, "sum_num_cards": 5896, "sum_num_payments": 6540, "sum_incomes": 342097.8099999997}, {"cp_dest": 28024, "sum_num_cards": 55, "sum_num_payments": 59, "sum_incomes": 7890.099999999999}, {"cp_dest": 28023, "sum_num_cards": 2493, "sum_num_payments": 2865, "sum_incomes": 160640.23000000013}, {"cp_dest": 28021, "sum_num_cards": 447, "sum_num_payments": 480, "sum_incomes": 18685.48}, {"cp_dest": 28019, "sum_num_cards": 418, "sum_num_payments": 459, "sum_incomes": 32435.73}, {"cp_dest": 28018, "sum_num_cards": 879, "sum_num_payments": 964, "sum_incomes": 38767.6}, {"cp_dest": 28015, "sum_num_cards": 1952, "sum_num_payments": 2107, "sum_incomes": 178421.93}, {"cp_dest": 28008, "sum_num_cards": 1717, "sum_num_payments": 1851, "sum_incomes": 113341.32999999999}, {"cp_dest": 28006, "sum_num_cards": 3743, "sum_num_payments": 4382, "sum_incomes": 336716.2899999999}, {"cp_dest": 28009, "sum_num_cards": 1850, "sum_num_payments": 2028, "sum_incomes": 154511.18999999994}, {"cp_dest": 28003, "sum_num_cards": 335, "sum_num_payments": 365, "sum_incomes": 43807.94000000001}, {"cp_dest": 28011, "sum_num_cards": 689, "sum_num_payments": 740, "sum_incomes": 62550.72000000004}, {"cp_dest": 28004, "sum_num_cards": 2780, "sum_num_payments": 3008, "sum_incomes": 153906.85000000006}, {"cp_dest": 28054, "sum_num_cards": 6612, "sum_num_payments": 7468, "sum_incomes": 297212.96999999986}, {"cp_dest": 28020, "sum_num_cards": 3129, "sum_num_payments": 3450, "sum_incomes": 288940.0500000001}, {"cp_dest": 28047, "sum_num_cards": 525, "sum_num_payments": 554, "sum_incomes": 22290.019999999997}, {"cp_dest": 28033, "sum_num_cards": 235, "sum_num_payments": 258, "sum_incomes": 22909.06}, {"cp_dest": 28007, "sum_num_cards": 2015, "sum_num_payments": 2201, "sum_incomes": 148492.06999999998}, {"cp_dest": 28002, "sum_num_cards": 1173, "sum_num_payments": 1300, "sum_incomes": 91306.95999999996}, {"cp_dest": 28039, "sum_num_cards": 36, "sum_num_payments": 38, "sum_incomes": 1211.8}, {"cp_dest": 28051, "sum_num_cards": 3539, "sum_num_payments": 3918, "sum_incomes": 156097.48000000004}, {"cp_dest": 28038, "sum_num_cards": 1612, "sum_num_payments": 1720, "sum_incomes": 64863.960000000036}, {"cp_dest": 28022, "sum_num_cards": 7547, "sum_num_payments": 8670, "sum_incomes": 334655.24000000017}, {"cp_dest": 28014, "sum_num_cards": 47, "sum_num_payments": 58, "sum_incomes": 4810.239999999999}, {"cp_dest": 28010, "sum_num_cards": 1305, "sum_num_payments": 1442, "sum_incomes": 78733.63000000002}, {"cp_dest": 28040, "sum_num_cards": 551, "sum_num_payments": 649, "sum_incomes": 80020.93}, {"cp_dest": 28017, "sum_num_cards": 235, "sum_num_payments": 240, "sum_incomes": 27233.279999999995}, {"cp_dest": 28013, "sum_num_cards": 2884, "sum_num_payments": 3042, "sum_incomes": 153271.64000000007}, {"cp_dest": 28016, "sum_num_cards": 1174, "sum_num_payments": 1304, "sum_incomes": 70984.06999999998}, {"cp_dest": 28042, "sum_num_cards": 128, "sum_num_payments": 133, "sum_incomes": 4542.1900000000005}, {"cp_dest": 28012, "sum_num_cards": 1325, "sum_num_payments": 1432, "sum_incomes": 86427.97999999997}, {"cp_dest": 28049, "sum_num_cards": 246, "sum_num_payments": 290, "sum_incomes": 22681.19}, {"cp_dest": 28025, "sum_num_cards": 2044, "sum_num_payments": 2195, "sum_incomes": 101126.96000000004}, {"cp_dest": 28005, "sum_num_cards": 1730, "sum_num_payments": 1909, "sum_incomes": 179357.98999999996}, {"cp_dest": 28032, "sum_num_cards": 1284, "sum_num_payments": 1410, "sum_incomes": 69617.26000000002}, {"cp_dest": 28001, "sum_num_cards": 2348, "sum_num_payments": 2543, "sum_incomes": 202814.4500000001}]}, {"_id": "Servicios hoteleros", "cps": [{"cp_dest": 28046, "sum_num_cards": 1147, "sum_num_payments": 1484, "sum_incomes": 222872.61999999997}, {"cp_dest": 28045, "sum_num_cards": 89, "sum_num_payments": 106, "sum_incomes": 9912.99}, {"cp_dest": 28037, "sum_num_cards": 255, "sum_num_payments": 358, "sum_incomes": 15847.309999999998}, {"cp_dest": 28036, "sum_num_cards": 282, "sum_num_payments": 383, "sum_incomes": 42022.18}, {"cp_dest": 28032, "sum_num_cards": 17, "sum_num_payments": 31, "sum_incomes": 4967.530000000001}, {"cp_dest": 28028, "sum_num_cards": 51, "sum_num_payments": 59, "sum_incomes": 8535.130000000001}, {"cp_dest": 28033, "sum_num_cards": 483, "sum_num_payments": 649, "sum_incomes": 52256.01000000001}, {"cp_dest": 28022, "sum_num_cards": 298, "sum_num_payments": 369, "sum_incomes": 55978.67}, {"cp_dest": 28012, "sum_num_cards": 1134, "sum_num_payments": 1373, "sum_incomes": 158527.91999999998}, {"cp_dest": 28008, "sum_num_cards": 88, "sum_num_payments": 131, "sum_incomes": 12529.449999999999}, {"cp_dest": 28006, "sum_num_cards": 695, "sum_num_payments": 806, "sum_incomes": 126019.76999999999}, {"cp_dest": 28005, "sum_num_cards": 234, "sum_num_payments": 262, "sum_incomes": 26326.64999999999}, {"cp_dest": 28002, "sum_num_cards": 716, "sum_num_payments": 867, "sum_incomes": 63949.08999999998}, {"cp_dest": 28001, "sum_num_cards": 1057, "sum_num_payments": 1286, "sum_incomes": 240213.6999999999}, {"cp_dest": 28004, "sum_num_cards": 387, "sum_num_payments": 456, "sum_incomes": 50512.88999999999}, {"cp_dest": 28015, "sum_num_cards": 189, "sum_num_payments": 285, "sum_incomes": 40244.16999999999}, {"cp_dest": 28050, "sum_num_cards": 118, "sum_num_payments": 172, "sum_incomes": 14314.820000000002}, {"cp_dest": 28020, "sum_num_cards": 527, "sum_num_payments": 662, "sum_incomes": 106632.29000000005}, {"cp_dest": 28010, "sum_num_cards": 157, "sum_num_payments": 199, "sum_incomes": 27502.859999999997}, {"cp_dest": 28023, "sum_num_cards": 24, "sum_num_payments": 26, "sum_incomes": 2740.1}, {"cp_dest": 28043, "sum_num_cards": 226, "sum_num_payments": 311, "sum_incomes": 23295.769999999997}, {"cp_dest": 28009, "sum_num_cards": 78, "sum_num_payments": 84, "sum_incomes": 13591.050000000001}, {"cp_dest": 28003, "sum_num_cards": 245, "sum_num_payments": 306, "sum_incomes": 39030.81}, {"cp_dest": 28007, "sum_num_cards": 67, "sum_num_payments": 78, "sum_incomes": 8841.140000000001}, {"cp_dest": 28042, "sum_num_cards": 576, "sum_num_payments": 677, "sum_incomes": 62781.53000000002}, {"cp_dest": 28027, "sum_num_cards": 323, "sum_num_payments": 452, "sum_incomes": 31119.41}, {"cp_dest": 28034, "sum_num_cards": 101, "sum_num_payments": 121, "sum_incomes": 37076.47999999999}, {"cp_dest": 28014, "sum_num_cards": 827, "sum_num_payments": 1000, "sum_incomes": 163808.44999999998}, {"cp_dest": 28013, "sum_num_cards": 1348, "sum_num_payments": 1588, "sum_incomes": 268551.41999999975}]}, {"_id": "Tecnología", "cps": [{"cp_dest": 28053, "sum_num_cards": 193, "sum_num_payments": 210, "sum_incomes": 12781.670000000002}, {"cp_dest": 28050, "sum_num_cards": 193, "sum_num_payments": 213, "sum_incomes": 20943.040000000005}, {"cp_dest": 28047, "sum_num_cards": 688, "sum_num_payments": 732, "sum_incomes": 72534.28000000003}, {"cp_dest": 28046, "sum_num_cards": 8349, "sum_num_payments": 10226, "sum_incomes": 761858.7999999999}, {"cp_dest": 28044, "sum_num_cards": 1047, "sum_num_payments": 1120, "sum_incomes": 90070.62999999999}, {"cp_dest": 28043, "sum_num_cards": 1657, "sum_num_payments": 1838, "sum_incomes": 135419.84999999998}, {"cp_dest": 28042, "sum_num_cards": 476, "sum_num_payments": 499, "sum_incomes": 28198.02}, {"cp_dest": 28037, "sum_num_cards": 4420, "sum_num_payments": 5018, "sum_incomes": 342620.6400000002}, {"cp_dest": 28036, "sum_num_cards": 2508, "sum_num_payments": 2667, "sum_incomes": 134179.87999999992}, {"cp_dest": 28035, "sum_num_cards": 130, "sum_num_payments": 133, "sum_incomes": 9805.93}, {"cp_dest": 28034, "sum_num_cards": 664, "sum_num_payments": 705, "sum_incomes": 37679.540000000015}, {"cp_dest": 28032, "sum_num_cards": 1814, "sum_num_payments": 1964, "sum_incomes": 176266.38999999996}, {"cp_dest": 28030, "sum_num_cards": 778, "sum_num_payments": 854, "sum_incomes": 76990.83}, {"cp_dest": 28026, "sum_num_cards": 722, "sum_num_payments": 788, "sum_incomes": 63306.59}, {"cp_dest": 28025, "sum_num_cards": 749, "sum_num_payments": 820, "sum_incomes": 84482.41000000002}, {"cp_dest": 28023, "sum_num_cards": 213, "sum_num_payments": 229, "sum_incomes": 20635.539999999997}, {"cp_dest": 28039, "sum_num_cards": 148, "sum_num_payments": 157, "sum_incomes": 10714.47}, {"cp_dest": 28022, "sum_num_cards": 10732, "sum_num_payments": 12360, "sum_incomes": 1194863.35}, {"cp_dest": 28021, "sum_num_cards": 4438, "sum_num_payments": 4850, "sum_incomes": 561995.4700000001}, {"cp_dest": 28016, "sum_num_cards": 712, "sum_num_payments": 784, "sum_incomes": 65361.72}, {"cp_dest": 28014, "sum_num_cards": 104, "sum_num_payments": 118, "sum_incomes": 12216.589999999995}, {"cp_dest": 28013, "sum_num_cards": 21311, "sum_num_payments": 25925, "sum_incomes": 1730035.4500000011}, {"cp_dest": 28008, "sum_num_cards": 2723, "sum_num_payments": 2983, "sum_incomes": 208034.58999999997}, {"cp_dest": 28005, "sum_num_cards": 989, "sum_num_payments": 1110, "sum_incomes": 158627.40999999997}, {"cp_dest": 28004, "sum_num_cards": 3251, "sum_num_payments": 4368, "sum_incomes": 324727.88999999996}, {"cp_dest": 28003, "sum_num_cards": 1207, "sum_num_payments": 1304, "sum_incomes": 161663.53000000003}, {"cp_dest": 28001, "sum_num_cards": 5147, "sum_num_payments": 5480, "sum_incomes": 334813.01}, {"cp_dest": 28024, "sum_num_cards": 307, "sum_num_payments": 328, "sum_incomes": 27872.480000000003}, {"cp_dest": 28038, "sum_num_cards": 799, "sum_num_payments": 930, "sum_incomes": 86739.26000000002}, {"cp_dest": 28033, "sum_num_cards": 364, "sum_num_payments": 400, "sum_incomes": 31625.839999999997}, {"cp_dest": 28045, "sum_num_cards": 1327, "sum_num_payments": 1455, "sum_incomes": 107179.30000000003}, {"cp_dest": 28028, "sum_num_cards": 899, "sum_num_payments": 975, "sum_incomes": 100770.62999999999}, {"cp_dest": 28054, "sum_num_cards": 5707, "sum_num_payments": 6308, "sum_incomes": 523569.3900000001}, {"cp_dest": 28029, "sum_num_cards": 3396, "sum_num_payments": 3785, "sum_incomes": 311772.0799999999}, {"cp_dest": 28031, "sum_num_cards": 680, "sum_num_payments": 749, "sum_incomes": 72950.5}, {"cp_dest": 28018, "sum_num_cards": 809, "sum_num_payments": 887, "sum_incomes": 78667.87999999998}, {"cp_dest": 28011, "sum_num_cards": 902, "sum_num_payments": 957, "sum_incomes": 70948.97999999998}, {"cp_dest": 28002, "sum_num_cards": 1765, "sum_num_payments": 1965, "sum_incomes": 163084.27000000005}, {"cp_dest": 28051, "sum_num_cards": 8056, "sum_num_payments": 9478, "sum_incomes": 523632.5999999998}, {"cp_dest": 28017, "sum_num_cards": 445, "sum_num_payments": 473, "sum_incomes": 39766.10999999999}, {"cp_dest": 28012, "sum_num_cards": 1332, "sum_num_payments": 1475, "sum_incomes": 146207.4200000001}, {"cp_dest": 28041, "sum_num_cards": 694, "sum_num_payments": 751, "sum_incomes": 73979.15000000001}, {"cp_dest": 28006, "sum_num_cards": 2642, "sum_num_payments": 2833, "sum_incomes": 213200.8800000001}, {"cp_dest": 28009, "sum_num_cards": 2181, "sum_num_payments": 2395, "sum_incomes": 227610.36000000007}, {"cp_dest": 28015, "sum_num_cards": 2479, "sum_num_payments": 2730, "sum_incomes": 256613.51000000033}, {"cp_dest": 28007, "sum_num_cards": 1304, "sum_num_payments": 1422, "sum_incomes": 102569.05000000005}, {"cp_dest": 28019, "sum_num_cards": 1036, "sum_num_payments": 1145, "sum_incomes": 118921.27999999996}, {"cp_dest": 28027, "sum_num_cards": 2251, "sum_num_payments": 2491, "sum_incomes": 227541.89999999988}, {"cp_dest": 28020, "sum_num_cards": 5095, "sum_num_payments": 5595, "sum_incomes": 739544.3599999999}, {"cp_dest": 28010, "sum_num_cards": 539, "sum_num_payments": 580, "sum_incomes": 60666.24000000002}]}, {"_id": "Transportes", "cps": [{"cp_dest": 28051, "sum_num_cards": 16218, "sum_num_payments": 24663, "sum_incomes": 1070369.4499999993}, {"cp_dest": 28050, "sum_num_cards": 12847, "sum_num_payments": 18270, "sum_incomes": 739941.8300000005}, {"cp_dest": 28049, "sum_num_cards": 4203, "sum_num_payments": 5318, "sum_incomes": 235310.40999999992}, {"cp_dest": 28048, "sum_num_cards": 3768, "sum_num_payments": 4594, "sum_incomes": 209682.1300000001}, {"cp_dest": 28045, "sum_num_cards": 44014, "sum_num_payments": 88126, "sum_incomes": 7606075.970000004}, {"cp_dest": 28043, "sum_num_cards": 18057, "sum_num_payments": 24153, "sum_incomes": 1012424.7699999996}, {"cp_dest": 28042, "sum_num_cards": 28017, "sum_num_payments": 38038, "sum_incomes": 1549636.5200000014}, {"cp_dest": 28040, "sum_num_cards": 2836, "sum_num_payments": 4471, "sum_incomes": 58705.439999999995}, {"cp_dest": 28038, "sum_num_cards": 10240, "sum_num_payments": 13346, "sum_incomes": 459856.89000000013}, {"cp_dest": 28036, "sum_num_cards": 49285, "sum_num_payments": 75132, "sum_incomes": 1716260.2699999993}, {"cp_dest": 28034, "sum_num_cards": 17457, "sum_num_payments": 23438, "sum_incomes": 912100.6500000007}, {"cp_dest": 28031, "sum_num_cards": 25363, "sum_num_payments": 40685, "sum_incomes": 1773345.9799999993}, {"cp_dest": 28030, "sum_num_cards": 10188, "sum_num_payments": 13218, "sum_incomes": 508537.8899999998}, {"cp_dest": 28029, "sum_num_cards": 17374, "sum_num_payments": 23405, "sum_incomes": 764515.8200000005}, {"cp_dest": 28028, "sum_num_cards": 3347, "sum_num_payments": 4058, "sum_incomes": 179950.78000000003}, {"cp_dest": 28027, "sum_num_cards": 26923, "sum_num_payments": 36656, "sum_incomes": 1538524.3200000003}, {"cp_dest": 28023, "sum_num_cards": 26326, "sum_num_payments": 35043, "sum_incomes": 1487313.1199999982}, {"cp_dest": 28044, "sum_num_cards": 12423, "sum_num_payments": 16283, "sum_incomes": 631583.9900000003}, {"cp_dest": 28017, "sum_num_cards": 11652, "sum_num_payments": 15760, "sum_incomes": 514758.0000000005}, {"cp_dest": 28016, "sum_num_cards": 19910, "sum_num_payments": 26114, "sum_incomes": 1141796.4300000002}, {"cp_dest": 28015, "sum_num_cards": 9111, "sum_num_payments": 11178, "sum_incomes": 427362.7599999997}, {"cp_dest": 28013, "sum_num_cards": 646, "sum_num_payments": 777, "sum_incomes": 138227.09000000003}, {"cp_dest": 28012, "sum_num_cards": 17683, "sum_num_payments": 23955, "sum_incomes": 903372.3800000005}, {"cp_dest": 28010, "sum_num_cards": 4290, "sum_num_payments": 5390, "sum_incomes": 191029.9799999998}, {"cp_dest": 28008, "sum_num_cards": 5313, "sum_num_payments": 7017, "sum_incomes": 324122.95000000007}, {"cp_dest": 28007, "sum_num_cards": 289704, "sum_num_payments": 439519, "sum_incomes": 12481682.840000004}, {"cp_dest": 28006, "sum_num_cards": 17199, "sum_num_payments": 23568, "sum_incomes": 734126.3699999999}, {"cp_dest": 28005, "sum_num_cards": 11454, "sum_num_payments": 14488, "sum_incomes": 450281.0700000001}, {"cp_dest": 28003, "sum_num_cards": 14595, "sum_num_payments": 18685, "sum_incomes": 820393.1700000006}, {"cp_dest": 28002, "sum_num_cards": 17439, "sum_num_payments": 22772, "sum_incomes": 1014888.7999999999}, {"cp_dest": 28001, "sum_num_cards": 17506, "sum_num_payments": 23608, "sum_incomes": 415165.2899999997}, {"cp_dest": 28033, "sum_num_cards": 42861, "sum_num_payments": 209464, "sum_incomes": 1531261.2700000026}, {"cp_dest": 28037, "sum_num_cards": 7820, "sum_num_payments": 10780, "sum_incomes": 356894.78000000014}, {"cp_dest": 28020, "sum_num_cards": 11797, "sum_num_payments": 14288, "sum_incomes": 887824.3599999992}, {"cp_dest": 28041, "sum_num_cards": 13467, "sum_num_payments": 19203, "sum_incomes": 766763.5800000012}, {"cp_dest": 28009, "sum_num_cards": 59808, "sum_num_payments": 119451, "sum_incomes": 1207624.01}, {"cp_dest": 28025, "sum_num_cards": 7477, "sum_num_payments": 9223, "sum_incomes": 314140.54999999993}, {"cp_dest": 28046, "sum_num_cards": 15239, "sum_num_payments": 18613, "sum_incomes": 712910.0699999994}, {"cp_dest": 28052, "sum_num_cards": 951, "sum_num_payments": 1309, "sum_incomes": 55439.44999999998}, {"cp_dest": 28047, "sum_num_cards": 5863, "sum_num_payments": 7663, "sum_incomes": 231119.00000000003}, {"cp_dest": 28039, "sum_num_cards": 2268, "sum_num_payments": 2751, "sum_incomes": 99546.54000000007}, {"cp_dest": 28053, "sum_num_cards": 3843, "sum_num_payments": 5028, "sum_incomes": 186038.05999999988}, {"cp_dest": 28026, "sum_num_cards": 13221, "sum_num_payments": 17746, "sum_incomes": 675477.7799999994}, {"cp_dest": 28032, "sum_num_cards": 10772, "sum_num_payments": 14950, "sum_incomes": 533200.93}, {"cp_dest": 28018, "sum_num_cards": 8137, "sum_num_payments": 11054, "sum_incomes": 445245.7600000005}, {"cp_dest": 28004, "sum_num_cards": 3888, "sum_num_payments": 4722, "sum_incomes": 46314.04999999998}, {"cp_dest": 28014, "sum_num_cards": 12391, "sum_num_payments": 15839, "sum_incomes": 289494.3399999999}, {"cp_dest": 28035, "sum_num_cards": 11456, "sum_num_payments": 14867, "sum_incomes": 613038.6800000002}, {"cp_dest": 28024, "sum_num_cards": 11267, "sum_num_payments": 14571, "sum_incomes": 555053.0700000004}, {"cp_dest": 28054, "sum_num_cards": 12736, "sum_num_payments": 16839, "sum_incomes": 718677.4000000003}, {"cp_dest": 28019, "sum_num_cards": 7712, "sum_num_payments": 10107, "sum_incomes": 336932.85000000003}, {"cp_dest": 28011, "sum_num_cards": 13221, "sum_num_payments": 16818, "sum_incomes": 662709.85}, {"cp_dest": 28021, "sum_num_cards": 11931, "sum_num_payments": 16854, "sum_incomes": 593545.2599999998}, {"cp_dest": 28022, "sum_num_cards": 13720, "sum_num_payments": 18887, "sum_incomes": 753448.7800000004}]}, {"_id": "Viajes", "cps": [{"cp_dest": 28050, "sum_num_cards": 602, "sum_num_payments": 776, "sum_incomes": 226712.01}, {"cp_dest": 28042, "sum_num_cards": 35, "sum_num_payments": 38, "sum_incomes": 11840.08}, {"cp_dest": 28041, "sum_num_cards": 27, "sum_num_payments": 30, "sum_incomes": 6007.02}, {"cp_dest": 28033, "sum_num_cards": 31, "sum_num_payments": 32, "sum_incomes": 13923.629999999997}, {"cp_dest": 28031, "sum_num_cards": 35, "sum_num_payments": 37, "sum_incomes": 17624.35}, {"cp_dest": 28030, "sum_num_cards": 88, "sum_num_payments": 98, "sum_incomes": 48852.82}, {"cp_dest": 28029, "sum_num_cards": 159, "sum_num_payments": 345, "sum_incomes": 588774.3800000001}, {"cp_dest": 28022, "sum_num_cards": 118, "sum_num_payments": 126, "sum_incomes": 47173.14}, {"cp_dest": 28017, "sum_num_cards": 93, "sum_num_payments": 109, "sum_incomes": 35745.58}, {"cp_dest": 28014, "sum_num_cards": 59, "sum_num_payments": 73, "sum_incomes": 19400.75}, {"cp_dest": 28013, "sum_num_cards": 412, "sum_num_payments": 460, "sum_incomes": 159783.51}, {"cp_dest": 28012, "sum_num_cards": 17, "sum_num_payments": 19, "sum_incomes": 9022.24}, {"cp_dest": 28008, "sum_num_cards": 53, "sum_num_payments": 56, "sum_incomes": 30762.37}, {"cp_dest": 28006, "sum_num_cards": 229, "sum_num_payments": 435, "sum_incomes": 169656.87000000002}, {"cp_dest": 28005, "sum_num_cards": 47, "sum_num_payments": 51, "sum_incomes": 27575.73}, {"cp_dest": 28024, "sum_num_cards": 40, "sum_num_payments": 43, "sum_incomes": 13019.199999999997}, {"cp_dest": 28003, "sum_num_cards": 131, "sum_num_payments": 155, "sum_incomes": 67682.42000000001}, {"cp_dest": 28002, "sum_num_cards": 182, "sum_num_payments": 200, "sum_incomes": 64829.740000000005}, {"cp_dest": 28038, "sum_num_cards": 67, "sum_num_payments": 75, "sum_incomes": 30219.819999999996}, {"cp_dest": 28020, "sum_num_cards": 63, "sum_num_payments": 128, "sum_incomes": 43293.12999999999}, {"cp_dest": 28028, "sum_num_cards": 187, "sum_num_payments": 591, "sum_incomes": 131177.18}, {"cp_dest": 28045, "sum_num_cards": 230, "sum_num_payments": 274, "sum_incomes": 58862.43000000001}, {"cp_dest": 28010, "sum_num_cards": 84, "sum_num_payments": 97, "sum_incomes": 29085.680000000004}, {"cp_dest": 28009, "sum_num_cards": 178, "sum_num_payments": 242, "sum_incomes": 123130.24999999997}, {"cp_dest": 28001, "sum_num_cards": 93, "sum_num_payments": 106, "sum_incomes": 78881.40000000001}, {"cp_dest": 28039, "sum_num_cards": 68, "sum_num_payments": 72, "sum_incomes": 32411.62}, {"cp_dest": 28027, "sum_num_cards": 180, "sum_num_payments": 395, "sum_incomes": 119343.65999999999}, {"cp_dest": 28023, "sum_num_cards": 10, "sum_num_payments": 12, "sum_incomes": 3830.01}, {"cp_dest": 28015, "sum_num_cards": 364, "sum_num_payments": 642, "sum_incomes": 323145.84}, {"cp_dest": 28011, "sum_num_cards": 69, "sum_num_payments": 79, "sum_incomes": 18164.65}, {"cp_dest": 28046, "sum_num_cards": 91, "sum_num_payments": 1128, "sum_incomes": 60254.08}, {"cp_dest": 28025, "sum_num_cards": 37, "sum_num_payments": 40, "sum_incomes": 19434.55}, {"cp_dest": 28047, "sum_num_cards": 25, "sum_num_payments": 28, "sum_incomes": 15599.84}, {"cp_dest": 28036, "sum_num_cards": 70, "sum_num_payments": 395, "sum_incomes": 67317.01999999999}, {"cp_dest": 28043, "sum_num_cards": 64, "sum_num_payments": 75, "sum_incomes": 30844.869999999995}, {"cp_dest": 28034, "sum_num_cards": 24, "sum_num_payments": 26, "sum_incomes": 9927.289999999999}, {"cp_dest": 28032, "sum_num_cards": 89, "sum_num_payments": 98, "sum_incomes": 26286.489999999998}, {"cp_dest": 28026, "sum_num_cards": 65, "sum_num_payments": 73, "sum_incomes": 23920.38}, {"cp_dest": 28016, "sum_num_cards": 104, "sum_num_payments": 135, "sum_incomes": 53579.67999999999}, {"cp_dest": 28004, "sum_num_cards": 59, "sum_num_payments": 70, "sum_incomes": 23289.48}, {"cp_dest": 28019, "sum_num_cards": 3, "sum_num_payments": 3, "sum_incomes": 624.57}, {"cp_dest": 28007, "sum_num_cards": 70, "sum_num_payments": 84, "sum_incomes": 39277.08}]}, {"_id": "Salud y belleza", "cps": [{"cp_dest": 28054, "sum_num_cards": 3753, "sum_num_payments": 4257, "sum_incomes": 165000.36999999994}, {"cp_dest": 28051, "sum_num_cards": 5014, "sum_num_payments": 5557, "sum_incomes": 215710.93000000005}, {"cp_dest": 28050, "sum_num_cards": 3323, "sum_num_payments": 3846, "sum_incomes": 189480.55999999997}, {"cp_dest": 28047, "sum_num_cards": 1962, "sum_num_payments": 2403, "sum_incomes": 94230.92999999995}, {"cp_dest": 28046, "sum_num_cards": 3136, "sum_num_payments": 3795, "sum_incomes": 185237.16000000006}, {"cp_dest": 28043, "sum_num_cards": 8390, "sum_num_payments": 10487, "sum_incomes": 482999.7000000002}, {"cp_dest": 28041, "sum_num_cards": 2351, "sum_num_payments": 2833, "sum_incomes": 125737.18}, {"cp_dest": 28038, "sum_num_cards": 3123, "sum_num_payments": 3642, "sum_incomes": 149087.9400000001}, {"cp_dest": 28036, "sum_num_cards": 4910, "sum_num_payments": 6228, "sum_incomes": 448242.31999999954}, {"cp_dest": 28034, "sum_num_cards": 4449, "sum_num_payments": 5678, "sum_incomes": 377049.4700000002}, {"cp_dest": 28032, "sum_num_cards": 3707, "sum_num_payments": 4444, "sum_incomes": 187092.57}, {"cp_dest": 28031, "sum_num_cards": 3520, "sum_num_payments": 4054, "sum_incomes": 140774.9699999999}, {"cp_dest": 28030, "sum_num_cards": 3651, "sum_num_payments": 4433, "sum_incomes": 190499.13000000003}, {"cp_dest": 28026, "sum_num_cards": 2388, "sum_num_payments": 2940, "sum_incomes": 108257.23999999999}, {"cp_dest": 28025, "sum_num_cards": 3535, "sum_num_payments": 4114, "sum_incomes": 158151.78999999998}, {"cp_dest": 28020, "sum_num_cards": 10560, "sum_num_payments": 13104, "sum_incomes": 633694.4200000002}, {"cp_dest": 28017, "sum_num_cards": 2448, "sum_num_payments": 2916, "sum_incomes": 128833.14000000001}, {"cp_dest": 28016, "sum_num_cards": 5516, "sum_num_payments": 7346, "sum_incomes": 492864.2400000005}, {"cp_dest": 28009, "sum_num_cards": 9698, "sum_num_payments": 12100, "sum_incomes": 697905.3600000001}, {"cp_dest": 28008, "sum_num_cards": 8322, "sum_num_payments": 10084, "sum_incomes": 461275.35000000015}, {"cp_dest": 28007, "sum_num_cards": 7505, "sum_num_payments": 9963, "sum_incomes": 473150.38000000006}, {"cp_dest": 28006, "sum_num_cards": 11043, "sum_num_payments": 14169, "sum_incomes": 954997.5200000003}, {"cp_dest": 28005, "sum_num_cards": 5999, "sum_num_payments": 7524, "sum_incomes": 319195.74000000017}, {"cp_dest": 28004, "sum_num_cards": 14273, "sum_num_payments": 16926, "sum_incomes": 878587.6099999998}, {"cp_dest": 28037, "sum_num_cards": 2889, "sum_num_payments": 3398, "sum_incomes": 130185.71999999999}, {"cp_dest": 28022, "sum_num_cards": 6697, "sum_num_payments": 7922, "sum_incomes": 346664.5600000001}, {"cp_dest": 28035, "sum_num_cards": 3303, "sum_num_payments": 4288, "sum_incomes": 214767.54000000007}, {"cp_dest": 28015, "sum_num_cards": 7057, "sum_num_payments": 8913, "sum_incomes": 483790.68}, {"cp_dest": 28042, "sum_num_cards": 2336, "sum_num_payments": 2894, "sum_incomes": 159831.17}, {"cp_dest": 28003, "sum_num_cards": 7629, "sum_num_payments": 9750, "sum_incomes": 529931.0399999993}, {"cp_dest": 28021, "sum_num_cards": 1927, "sum_num_payments": 2307, "sum_incomes": 84086.15999999997}, {"cp_dest": 28027, "sum_num_cards": 9195, "sum_num_payments": 11429, "sum_incomes": 575492.0199999999}, {"cp_dest": 28029, "sum_num_cards": 15094, "sum_num_payments": 19329, "sum_incomes": 765721.7400000001}, {"cp_dest": 28033, "sum_num_cards": 4424, "sum_num_payments": 5560, "sum_incomes": 282425.7899999998}, {"cp_dest": 28001, "sum_num_cards": 14062, "sum_num_payments": 17273, "sum_incomes": 1188372.6399999992}, {"cp_dest": 28028, "sum_num_cards": 5185, "sum_num_payments": 6672, "sum_incomes": 333500.13999999996}, {"cp_dest": 28013, "sum_num_cards": 7777, "sum_num_payments": 9095, "sum_incomes": 494991.1500000004}, {"cp_dest": 28044, "sum_num_cards": 2257, "sum_num_payments": 2607, "sum_incomes": 108652.95999999999}, {"cp_dest": 28045, "sum_num_cards": 6439, "sum_num_payments": 8498, "sum_incomes": 346276.7199999999}, {"cp_dest": 28019, "sum_num_cards": 2500, "sum_num_payments": 3075, "sum_incomes": 121580.99000000003}, {"cp_dest": 28049, "sum_num_cards": 849, "sum_num_payments": 977, "sum_incomes": 37083.000000000015}, {"cp_dest": 28014, "sum_num_cards": 2686, "sum_num_payments": 3104, "sum_incomes": 158398.72999999986}, {"cp_dest": 28011, "sum_num_cards": 2658, "sum_num_payments": 3295, "sum_incomes": 135096.47000000006}, {"cp_dest": 28012, "sum_num_cards": 2642, "sum_num_payments": 3147, "sum_incomes": 180630.28000000003}, {"cp_dest": 28024, "sum_num_cards": 2023, "sum_num_payments": 2349, "sum_incomes": 107962.56999999996}, {"cp_dest": 28002, "sum_num_cards": 7888, "sum_num_payments": 10460, "sum_incomes": 497544.4500000003}, {"cp_dest": 28040, "sum_num_cards": 323, "sum_num_payments": 376, "sum_incomes": 20697.46}, {"cp_dest": 28018, "sum_num_cards": 1939, "sum_num_payments": 2258, "sum_incomes": 89806.34999999999}, {"cp_dest": 28039, "sum_num_cards": 1928, "sum_num_payments": 2327, "sum_incomes": 94883.26000000002}, {"cp_dest": 28023, "sum_num_cards": 2443, "sum_num_payments": 3135, "sum_incomes": 223142.5000000002}, {"cp_dest": 28010, "sum_num_cards": 5771, "sum_num_payments": 7400, "sum_incomes": 429284.1200000006}, {"cp_dest": 28053, "sum_num_cards": 929, "sum_num_payments": 1045, "sum_incomes": 38430.679999999986}]}]
    var DISTRICTS = { "28032":"Vicálvaro", "28033":"Pinar del Rey", "28034":"Fuencarral - El Pardo", "28035":"Mirasierra", "28036":"Chamartín - Plaza Castilla", "28037":"San Blas", "28038":"Puente de Vallecas", "28039":"Tetuán", "28040":"Moncloa", "28041":"Ciudad de los Ángeles", "28042":"Barrio del Aeropuerto", "28043":"Hortaleza", "28044":"Barrio de la Fortuna", "28045":"Arganzuela", "28046":"Paseo de la Castellana", "28047":"Latina", "28048":"Fuencarral", "28049":"Montecarmelo", "28050":"Sanchinarro", "28051":"Vallecas", "28052":"Vicálvaro Industrial", "28053":"Puente de Vallecas", "28054":"Carabanchel - La Peseta", "28001":"Salamanca", "28002":"Prosperidad", "28003":"Valverde", "28004":"Chueca", "28005":"Barrio de la Latina", "28006":"Salamanca Norte", "28007":"Retiro", "28008":"Parque del Oeste", "28009":"Ibiza", "28010":"Chamberí", "28011":"Casa de Campo", "28012":"Barrio de las Letras", "28013":"Barrio de los Austrias", "28014":"Parque del Retiro", "28015":"Malasaña", "28016":"Chamartín", "28017":"Pueblo Nuevo", "28018":"Palomeras - Vallecas", "28019":"San Isidro", "28020":"Santiago Bernabéu", "28021":"Villaverde Alto", "28022":"Canillejas", "28023":"Majadahonda", "28024":"Campamento", "28025":"Carabanchel - Vista Alegre", "28026":"Usera", "28027":"Quintana", "28028":"Ciudad Lineal", "28029":"Barrio del Pilar", "28030":"Moratalaz", "28031":"Villa de Vallecas" };

    var camera, scene, renderer, renderercube, vectorcubo, cubo, geometry, material;
    var cameraControls, controls;
    var projector;

    var buttons = [];

    var objects = [];
    var targets = { grupo: [], esfera: [], helice: [], capa: [] };

    init();
    //animate();

    var leapController = new Leap.Controller({optimizeHMD: false});
    leapController.connect();

    setInterval(function(){
      cameraControls.update(leapController.frame());
      controls.update();
      showCursor(leapController.frame());
      TWEEN.update();
      render();
    }, 40);

    buttons.push($("#grupos2"));
    buttons.push($("#capas2"));
    buttons.push($("#esferas2"));
    buttons.push($("#helices2"));
    buttons.push($("#enlace2"));
    buttons.push($("#fullscreentoggle2"));

    function init() {

      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 200000 );
      camera.position.z = 5000;

      controls = new THREE.TrackballControls( camera );
      controls.rotateSpeed = 0.2;
      controls.zoomSpeed = 0.2;
      controls.panSpeed = 0.2;

      cameraControls = new THREE.LeapCameraControls(camera);
      cameraControls.rotateEnabled  = true;
      cameraControls.rotateSpeed    = 2;
      cameraControls.rotateHands    = 1;
      cameraControls.rotateFingers  = [2, 3];

      cameraControls.zoomEnabled    = true;
      cameraControls.zoomSpeed      = 3;
      cameraControls.zoomHands      = 2;
      cameraControls.zoomFingers    = [6, 10];

      cameraControls.panEnabled     = true;
      cameraControls.panSpeed       = 2;
      cameraControls.panHands       = 1;
      cameraControls.panFingers     = [4, 5];
      cameraControls.panRightHanded = false;


      scene = new THREE.Scene();
      projector = new THREE.Projector();

      var light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 );
      scene.add( light );

      light = new THREE.DirectionalLight( 0x002288 );//azul
      light.position.set( -1, -1, -1 );
      scene.add( light );

      light = new THREE.AmbientLight( 0x858586 );//gris oscuro
      scene.add( light );

      geometry = new THREE.OctahedronGeometry( 60000,6 );

      var Textura = new THREE.ImageUtils.loadTexture("textures/text3.jpg"); //carga de textura
      material = new THREE.MeshLambertMaterial({ map:Textura, side:THREE.DoubleSide }); //aplicacion de textura como material
      //material = new THREE.MeshLambertMaterial( { color: 0xAEB404 } );
      material.transparent = true;
      material.opacity = 0.2;

      cubo = new THREE.Mesh( geometry,material );
      vectorcubo = new THREE.Vector3();

      cubo.position.x = 110;
      cubo.position.y = 110;
      cubo.position.z = 110;

      //object.rotation.y = (0.36*i);

      vectorcubo.x = cubo.position.x * 2;
      vectorcubo.y = cubo.position.y * 2;
      vectorcubo.z = cubo.position.z * 2;
      //object.lookAt(vector);

      cubo.updateMatrix();
      cubo.matrixAutoUpdate = false;

      scene.add( cubo );

      // grupos
      for ( var i = 0; i < categorias.length; i ++ ) {
        var sumaIngresos = 0;
        var sumaGastos = 0;
        var totalTarjetas = 0;

        for (var e = 0; e < categorias[i].cps.length; e++) {
          sumaIngresos += categorias[i].cps[e].sum_incomes;
          sumaGastos += categorias[i].cps[e].sum_num_payments;
          totalTarjetas += categorias[i].cps[e].sum_num_cards;
        }

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,0.8'+/* + ( Math.random() * 0.5 + 0.25 ) + */')';

        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent ='CATEGORIA: '+categorias[i]._id;
        element.appendChild(symbol);

        var grafico = document.createElement('div');
        grafico.className = 'grafico';
        element.appendChild(grafico);

        var n = 3, // number of layers
          m = categorias[i].cps.length, // number of samples per layer
          stack = d3.layout.stack(),
          layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
          yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
          yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });

        var margin = {top: 150, right: 10, bottom: 20, left: 10},
          width = 700 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

        var x = d3.scale.ordinal()
          .domain(d3.range(m))
          .rangeRoundBands([0, width], .08);

        var y = d3.scale.linear()
          .domain([0, yStackMax])
          .range([height, 0]);

        var color = d3.scale.linear()
          .domain([0, n - 1])
          .range(["#aad", "#556"]);

        var xAxis = d3.svg.axis()
          .scale(x)
          .tickFormat(function(d) {
              return DISTRICTS[categorias[i].cps[d].cp_dest].substring(0,9);
          })
          .orient("center");

        var svg = d3.select(grafico).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var layer = svg.selectAll(".layer")
          .data(layers)
          .enter().append("g")
          .attr("class", "layer")
          .style("fill", function(d, i) { return color(i); });

        var rect = layer.selectAll("rect")
          .data(function(d) { return d; })
          .enter().append("rect")
          .attr("x", function(d) { return x(d.x); })
          .attr("y", height)
          .attr("width", x.rangeBand())
          .attr("height", 100);

        rect.transition()
          .delay(function(d, i) { return i * 10; })
          .attr("y", function(d) { return y(d.y0 + d.y); })
          .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });


        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .selectAll("text")
          .attr("transform", function(d) {
            return "rotate(-45)"
          });


        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML =
            '<b>INGRESOS: </b>' + beautifyNumber(sumaIngresos) + ' €'+'<br>' +
            '<b>PAGOS: </b>' + beautifyNumber(sumaGastos) +'<br>' +
            '<b>Nº TARJETAS UTILIZADAS: </b>' + beautifyNumber(totalTarjetas);
        element.appendChild(details);

        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        //object.updateMatrix();
        //object.matrixAutoUpdate = false;

        scene.add(object);

        objects.push(object);

        //

        var object = new THREE.Object3D();
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        //object.position.x = ( i * 200 ) - 4000;
        //object.position.y = i;

        targets.grupo.push(object);

      }
      // esfera

      var vector = new THREE.Vector3();

      for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();

        object.position.x = 1000 * Math.cos( theta ) * Math.sin( phi );
        object.position.y = 1000 * Math.sin( theta ) * Math.sin( phi );
        object.position.z = 1000 * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.esfera.push( object );

      }
      // helice

      var vector = new THREE.Vector3();

      for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var phi = i * 0.300 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 3000 * Math.sin( phi );
        object.position.y = - ( i * 32 ) + 800;
        object.position.z = 3000 * Math.cos( phi );

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );

        targets.helice.push( object );
      }
      // capas

      for ( var i = 0; i < objects.length; i ++ ) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 900 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 800 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 2500 - 2000;

        targets.capa.push( object );
      }

      renderer = new THREE.CSS3DRenderer({});
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.domElement.style.position = 'absolute';
      document.getElementById( 'container2' ).appendChild( renderer.domElement );

      var container = document.getElementById( 'container2' );
      renderercube = new THREE.WebGLRenderer( {antialias: true} );
      renderercube.setClearColor( 0x000000 );
      //renderer.setClearColor( scene.fog.color, 1 );//añadir efecto niebla
      renderercube.setSize( window.innerWidth, window.innerHeight );
      renderercube.sortObjects = false;
      container.appendChild(renderercube.domElement);


      var button = document.getElementById( 'grupos2' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.grupo, 2000 );

      }, false );

      var button = document.getElementById( 'esferas2' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.esfera, 2000 );

      }, false );

      var button = document.getElementById( 'helices2' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.helice, 2000 );

      }, false );

      var button = document.getElementById( 'capas2' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.capa, 2000 );

      }, false );

      var button = document.getElementById( 'fullscreentoggle2' );
      button.addEventListener( 'click', function ( event ) {
        toggleFullscreen();
      }, false );

      transformar( targets.helice, 2000 );

      window.addEventListener( 'resize', onWindowResize, false );

    }

    function transformar( targets, duration ) {

      TWEEN.removeAll();

      for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
          .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
          .easing( TWEEN.Easing.Exponential.InOut )
          .start();

        new TWEEN.Tween( object.rotation )
          .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
          .easing( TWEEN.Easing.Exponential.InOut )
          .start();

      }

      new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

    }

    d3.selectAll("input").on("change", change);

    var timeout = setTimeout(function() {
      d3.select("input[value=\"grouped\"]").property("checked", true).each(change);
    }, 2000);

    function change() {
      clearTimeout(timeout);
      if (this.value === "grouped") transitionGrouped();
      else transitionStacked();
    }


      function transitionGrouped() {
      y.domain([0, yGroupMax]);

      rect.transition()
        .duration(500)
        .delay(function(d, i) { return i * 10; })
        .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
        .attr("width", x.rangeBand() / n)
        .transition()
        .attr("y", function(d) { return y(d.y); })
        .attr("height", function(d) { return height - y(d.y); });
    }

    function transitionStacked() {
      y.domain([0, yStackMax]);

      rect.transition()
        .duration(500)
        .delay(function(d, i) { return i * 10; })
        .attr("y", function(d) { return y(d.y0 + d.y); })
        .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
        .transition()
        .attr("x", function(d) { return x(d.x); })
        .attr("width", x.rangeBand());
    }

    function bumpLayer(n, o) {

      function bump(a) {
        var x = 1 / (.1 + Math.random()),
          y = 2 * Math.random() - .5,
          z = 10 / (.1 + Math.random());
        for (var i = 0; i < n; i++) {
          var w = (i / n - y) * z;
          a[i] += x * Math.exp(-w * w);
        }
      }

      var a = [], i;
      for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
      for (i = 0; i < 5; ++i) bump(a);
      return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );
      renderercube.setSize( window.innerWidth, window.innerHeight );

      render();

    }

    function beautifyNumber(num){
      var aux = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      aux = aux.substring(0, aux.length - 3);
      return aux;
    }

    function animate() {

      requestAnimationFrame( animate );

      TWEEN.update();

      controls.update();

    }

    function render() {

      renderer.render( scene, camera );
      renderercube.render( scene, camera );

    }

    function transform(tipPosition, w, h) {
      var width = 150;
      var height = 150;
      var minHeight = 100;
      var ftx = tipPosition[0];
      var fty = tipPosition[1];
      ftx = (ftx > width ? width - 1 : (ftx < -width ? -width + 1 : ftx));
      fty = (fty > 2*height ? 2*height - 1 : (fty < minHeight ? minHeight + 1 : fty));
      var x = THREE.Math.mapLinear(ftx, -width, width, 0, w);
      var y = THREE.Math.mapLinear(fty, 2*height, minHeight, 0, h);
      return [x, y];
    }

    function showCursor(frame) {
      var hl = frame.hands.length;
      var fl = frame.pointables.length;
      var fls = 0;
      frame.pointables.forEach(function(item){
        if(item.extended) fls++;
      });
      if (hl == 1 && fls == 1) {
        var f = frame.pointables[0];
        var cont = $(renderer.domElement);
        var offset = cont.offset();
        var coords = transform(f.tipPosition, cont.width(), cont.height());
        intersections(frame, coords);
        $("#cursor").css('left', offset.left + coords[0] - (($("#cursor").width() - 1)/2 + 1));
        $("#cursor").css('top', offset.top + coords[1] - (($("#cursor").height() - 1)/2 + 1));
      } else {
        $("#cursor").css('left', -1000);
        $("#cursor").css('top', -1000);
      };
    }

    function toggleFullscreen(){
      if ((document.fullScreenElement && document.fullScreenElement !== null) ||
          (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    }

    var lastDivItems = 0;
    var lastDivItem;
    function intersections(frame, coords) {
      buttons.forEach(function(item) {
        if (checkMouseCollision(coords[0], coords[1], item)) {
          if(lastDivItem == undefined)
            lastDivItems = 0;
          else if(lastDivItem == item)
            lastDivItems++;
          else
            lastDivItems = 1;

          lastDivItem = item;

          if(lastDivItems > 20){
            if(item.attr('id') === "enlace"){
              window.location = item.children().attr('ng-href');
            }
            else item.trigger( "click" );
            lastDivItem = undefined;
            lastDivItems = 0;
          }
        }

      });
    }

    function checkMouseCollision(x, y, element) {
      var objX = element.offset().left;
      var objY = element.offset().top;
      var objW = element.width();
      var objH = element.height();

      if(x > objX && x< (objX + objW) && (y >objY && y < (objY + objH)))
        return true;
      else return false;
    }
  }]);
