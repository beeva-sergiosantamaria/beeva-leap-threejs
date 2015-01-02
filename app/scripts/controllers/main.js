'use strict';

angular.module('pruebaApp')

  .controller('RenderCtrl', ['$scope',function($scope) {

    var CPS = [{"_id": 28019, "categories": [{"sum_num_cards": 418, "name": "Deportes y juguetes", "sum_num_payments": 459, "sum_incomes": 32435.73}, {"sum_num_cards": 2255, "name": "Otros servicios", "sum_num_payments": 3218, "sum_incomes": 135234.75}, {"sum_num_cards": 3669, "name": "Hipermercados", "sum_num_payments": 6314, "sum_incomes": 180597.3899999999}, {"sum_num_cards": 1178, "name": "Hogar", "sum_num_payments": 1330, "sum_incomes": 141236.89999999997}, {"sum_num_cards": 3641, "name": "Salud", "sum_num_payments": 4498, "sum_incomes": 218056.38000000006}, {"sum_num_cards": 11138, "name": "Moda", "sum_num_payments": 23676, "sum_incomes": 716306.9999999998}, {"sum_num_cards": 11138, "name": "Comida", "sum_num_payments": 23676, "sum_incomes": 716306.9999999998}, {"sum_num_cards": 2500, "name": "Salud y belleza", "sum_num_payments": 3075, "sum_incomes": 121580.99000000003}, {"sum_num_cards": 195, "name": "Contenidos", "sum_num_payments": 206, "sum_incomes": 4999.819999999999}, {"sum_num_cards": 2703, "name": "Bares y restaurantes", "sum_num_payments": 4300, "sum_incomes": 161058.85999999996}, {"sum_num_cards": 38, "name": "Ocio", "sum_num_payments": 62, "sum_incomes": 8762.1}, {"sum_num_cards": 1054, "name": "Vehículos", "sum_num_payments": 1135, "sum_incomes": 210749.66}, {"sum_num_cards": 1036, "name": "Tecnología", "sum_num_payments": 1145, "sum_incomes": 118921.27999999996}, {"sum_num_cards": 7712, "name": "Transporte", "sum_num_payments": 10107, "sum_incomes": 336932.85000000003}, {"sum_num_cards": 3, "name": "Viajes", "sum_num_payments": 3, "sum_incomes": 624.57}]}, {"_id": 28011, "categories": [{"sum_num_cards": 1787, "name": "Otros servicios", "sum_num_payments": 2449, "sum_incomes": 102571.09999999999}, {"sum_num_cards": 689, "name": "Deportes y juguetes", "sum_num_payments": 740, "sum_incomes": 62550.72000000004}, {"sum_num_cards": 1904, "name": "Ocio", "sum_num_payments": 2469, "sum_incomes": 141550.91999999995}, {"sum_num_cards": 859, "name": "Hogar", "sum_num_payments": 973, "sum_incomes": 57233.90999999999}, {"sum_num_cards": 69, "name": "Viajes", "sum_num_payments": 79, "sum_incomes": 18164.65}, {"sum_num_cards": 902, "name": "Tecnología", "sum_num_payments": 957, "sum_incomes": 70948.97999999998}, {"sum_num_cards": 4373, "name": "Comida", "sum_num_payments": 7879, "sum_incomes": 238279.64999999997}, {"sum_num_cards": 73, "name": "Contenidos", "sum_num_payments": 83, "sum_incomes": 2224.32}, {"sum_num_cards": 4373, "name": "Moda", "sum_num_payments": 7879, "sum_incomes": 238279.64999999997}, {"sum_num_cards": 2658, "name": "Salud y belleza", "sum_num_payments": 3295, "sum_incomes": 135096.47000000006}, {"sum_num_cards": 2682, "name": "Bares y restaurantes", "sum_num_payments": 3406, "sum_incomes": 187760.57999999996}, {"sum_num_cards": 5838, "name": "Hipermercados", "sum_num_payments": 12712, "sum_incomes": 361078.0900000004}, {"sum_num_cards": 13221, "name": "Transporte", "sum_num_payments": 16818, "sum_incomes": 662709.85}, {"sum_num_cards": 4027, "name": "Salud", "sum_num_payments": 5105, "sum_incomes": 297851.17}, {"sum_num_cards": 492, "name": "Vehículos", "sum_num_payments": 515, "sum_incomes": 125836.83}]}, {"_id": 28039, "categories": [{"sum_num_cards": 148, "name": "Tecnología", "sum_num_payments": 157, "sum_incomes": 10714.47}, {"sum_num_cards": 2268, "name": "Transporte", "sum_num_payments": 2751, "sum_incomes": 99546.54000000007}, {"sum_num_cards": 36, "name": "Deportes y juguetes", "sum_num_payments": 38, "sum_incomes": 1211.8}, {"sum_num_cards": 1829, "name": "Otros servicios", "sum_num_payments": 2412, "sum_incomes": 100232.85999999993}, {"sum_num_cards": 68, "name": "Viajes", "sum_num_payments": 72, "sum_incomes": 32411.62}, {"sum_num_cards": 360, "name": "Hogar", "sum_num_payments": 416, "sum_incomes": 34625.979999999996}, {"sum_num_cards": 22060, "name": "Comida", "sum_num_payments": 40626, "sum_incomes": 1696021.1400000006}, {"sum_num_cards": 1800, "name": "Hipermercados", "sum_num_payments": 3044, "sum_incomes": 92242.54}, {"sum_num_cards": 3549, "name": "Salud", "sum_num_payments": 4601, "sum_incomes": 191051.62999999995}, {"sum_num_cards": 185, "name": "Contenidos", "sum_num_payments": 192, "sum_incomes": 30503.62}, {"sum_num_cards": 22060, "name": "Moda", "sum_num_payments": 40626, "sum_incomes": 1696021.1400000006}, {"sum_num_cards": 1181, "name": "Vehículos", "sum_num_payments": 1243, "sum_incomes": 331062.6700000001}, {"sum_num_cards": 1928, "name": "Salud y belleza", "sum_num_payments": 2327, "sum_incomes": 94883.26000000002}, {"sum_num_cards": 3704, "name": "Bares y restaurantes", "sum_num_payments": 5390, "sum_incomes": 325014.1400000002}]}, {"_id": 28035, "categories": [{"sum_num_cards": 130, "name": "Tecnología", "sum_num_payments": 133, "sum_incomes": 9805.93}, {"sum_num_cards": 3303, "name": "Salud y belleza", "sum_num_payments": 4288, "sum_incomes": 214767.54000000007}, {"sum_num_cards": 688, "name": "Deportes y juguetes", "sum_num_payments": 968, "sum_incomes": 75693.27000000002}, {"sum_num_cards": 1019, "name": "Ocio", "sum_num_payments": 1321, "sum_incomes": 110474.65999999999}, {"sum_num_cards": 5457, "name": "Salud", "sum_num_payments": 7260, "sum_incomes": 455263.4000000005}, {"sum_num_cards": 14597, "name": "Comida", "sum_num_payments": 35467, "sum_incomes": 1299036.3200000008}, {"sum_num_cards": 14597, "name": "Moda", "sum_num_payments": 35467, "sum_incomes": 1299036.3200000008}, {"sum_num_cards": 119, "name": "Contenidos", "sum_num_payments": 136, "sum_incomes": 3493.5299999999997}, {"sum_num_cards": 353, "name": "Hogar", "sum_num_payments": 386, "sum_incomes": 23498.85}, {"sum_num_cards": 5780, "name": "Bares y restaurantes", "sum_num_payments": 7815, "sum_incomes": 323934.1999999999}, {"sum_num_cards": 11456, "name": "Transporte", "sum_num_payments": 14867, "sum_incomes": 613038.6800000002}, {"sum_num_cards": 270, "name": "Vehículos", "sum_num_payments": 288, "sum_incomes": 73423.40000000001}, {"sum_num_cards": 3643, "name": "Hipermercados", "sum_num_payments": 8580, "sum_incomes": 287892.8}, {"sum_num_cards": 2395, "name": "Otros servicios", "sum_num_payments": 3149, "sum_incomes": 160423.51000000004}]}, {"_id": 28053, "categories": [{"sum_num_cards": 193, "name": "Tecnología", "sum_num_payments": 210, "sum_incomes": 12781.670000000002}, {"sum_num_cards": 295, "name": "Hogar", "sum_num_payments": 322, "sum_incomes": 25606.780000000006}, {"sum_num_cards": 859, "name": "Otros servicios", "sum_num_payments": 1122, "sum_incomes": 40029.43999999999}, {"sum_num_cards": 11051, "name": "Comida", "sum_num_payments": 19888, "sum_incomes": 822389.2900000003}, {"sum_num_cards": 3843, "name": "Transporte", "sum_num_payments": 5028, "sum_incomes": 186038.05999999988}, {"sum_num_cards": 28, "name": "Contenidos", "sum_num_payments": 33, "sum_incomes": 1061.33}, {"sum_num_cards": 1979, "name": "Bares y restaurantes", "sum_num_payments": 2477, "sum_incomes": 95170.89999999997}, {"sum_num_cards": 1532, "name": "Salud", "sum_num_payments": 1860, "sum_incomes": 86081.33}, {"sum_num_cards": 169, "name": "Vehículos", "sum_num_payments": 182, "sum_incomes": 41798.979999999996}, {"sum_num_cards": 11051, "name": "Moda", "sum_num_payments": 19888, "sum_incomes": 822389.2900000003}, {"sum_num_cards": 929, "name": "Salud y belleza", "sum_num_payments": 1045, "sum_incomes": 38430.679999999986}]}, {"_id": 28001, "categories": [{"sum_num_cards": 17506, "name": "Transporte", "sum_num_payments": 23608, "sum_incomes": 415165.2899999997}, {"sum_num_cards": 5147, "name": "Tecnología", "sum_num_payments": 5480, "sum_incomes": 334813.01}, {"sum_num_cards": 121, "name": "Ocio", "sum_num_payments": 169, "sum_incomes": 21246.670000000002}, {"sum_num_cards": 6870, "name": "Hipermercados", "sum_num_payments": 12290, "sum_incomes": 565312.1200000001}, {"sum_num_cards": 1057, "name": "Hoteles", "sum_num_payments": 1286, "sum_incomes": 240213.6999999999}, {"sum_num_cards": 93, "name": "Viajes", "sum_num_payments": 106, "sum_incomes": 78881.40000000001}, {"sum_num_cards": 7033, "name": "Hogar", "sum_num_payments": 8437, "sum_incomes": 716949.9299999999}, {"sum_num_cards": 10139, "name": "Salud", "sum_num_payments": 13013, "sum_incomes": 1019833.2099999997}, {"sum_num_cards": 17187, "name": "Comida", "sum_num_payments": 26385, "sum_incomes": 932584.72}, {"sum_num_cards": 14062, "name": "Salud y belleza", "sum_num_payments": 17273, "sum_incomes": 1188372.6399999992}, {"sum_num_cards": 1055, "name": "Contenidos", "sum_num_payments": 1169, "sum_incomes": 56723.839999999975}, {"sum_num_cards": 17187, "name": "Moda", "sum_num_payments": 26385, "sum_incomes": 932584.72}, {"sum_num_cards": 8565, "name": "Otros servicios", "sum_num_payments": 9915, "sum_incomes": 779669.2899999997}, {"sum_num_cards": 33884, "name": "Bares y restaurantes", "sum_num_payments": 52498, "sum_incomes": 2668492.599999999}, {"sum_num_cards": 2348, "name": "Deportes y juguetes", "sum_num_payments": 2543, "sum_incomes": 202814.4500000001}, {"sum_num_cards": 1677, "name": "Vehículos", "sum_num_payments": 1719, "sum_incomes": 174278.31999999992}]}, {"_id": 28018, "categories": [{"sum_num_cards": 879, "name": "Deportes y juguetes", "sum_num_payments": 964, "sum_incomes": 38767.6}, {"sum_num_cards": 1791, "name": "Otros servicios", "sum_num_payments": 2450, "sum_incomes": 128214.38999999996}, {"sum_num_cards": 371, "name": "Hogar", "sum_num_payments": 411, "sum_incomes": 34892.24}, {"sum_num_cards": 92, "name": "Ocio", "sum_num_payments": 113, "sum_incomes": 9988.900000000001}, {"sum_num_cards": 809, "name": "Tecnología", "sum_num_payments": 887, "sum_incomes": 78667.87999999998}, {"sum_num_cards": 13838, "name": "Moda", "sum_num_payments": 28554, "sum_incomes": 1012295.0300000004}, {"sum_num_cards": 2883, "name": "Salud", "sum_num_payments": 3725, "sum_incomes": 162300.91999999998}, {"sum_num_cards": 8137, "name": "Transporte", "sum_num_payments": 11054, "sum_incomes": 445245.7600000005}, {"sum_num_cards": 2425, "name": "Bares y restaurantes", "sum_num_payments": 3100, "sum_incomes": 86719.24999999999}, {"sum_num_cards": 13838, "name": "Comida", "sum_num_payments": 28554, "sum_incomes": 1012295.0300000004}, {"sum_num_cards": 1939, "name": "Salud y belleza", "sum_num_payments": 2258, "sum_incomes": 89806.34999999999}, {"sum_num_cards": 40, "name": "Contenidos", "sum_num_payments": 40, "sum_incomes": 1108.83}, {"sum_num_cards": 247, "name": "Vehículos", "sum_num_payments": 265, "sum_incomes": 28692.71000000001}]}, {"_id": 28021, "categories": [{"sum_num_cards": 4438, "name": "Tecnología", "sum_num_payments": 4850, "sum_incomes": 561995.4700000001}, {"sum_num_cards": 447, "name": "Deportes y juguetes", "sum_num_payments": 480, "sum_incomes": 18685.48}, {"sum_num_cards": 1927, "name": "Salud y belleza", "sum_num_payments": 2307, "sum_incomes": 84086.15999999997}, {"sum_num_cards": 569, "name": "Hogar", "sum_num_payments": 647, "sum_incomes": 55108.830000000016}, {"sum_num_cards": 19446, "name": "Comida", "sum_num_payments": 38279, "sum_incomes": 1937506.4499999993}, {"sum_num_cards": 3267, "name": "Salud", "sum_num_payments": 4359, "sum_incomes": 230880.93}, {"sum_num_cards": 19446, "name": "Moda", "sum_num_payments": 38279, "sum_incomes": 1937506.4499999993}, {"sum_num_cards": 1337, "name": "Otros servicios", "sum_num_payments": 1905, "sum_incomes": 82123.51}, {"sum_num_cards": 2319, "name": "Bares y restaurantes", "sum_num_payments": 4114, "sum_incomes": 137938.07}, {"sum_num_cards": 2212, "name": "Hipermercados", "sum_num_payments": 3524, "sum_incomes": 96025.67}, {"sum_num_cards": 187, "name": "Contenidos", "sum_num_payments": 210, "sum_incomes": 6224.0199999999995}, {"sum_num_cards": 662, "name": "Vehículos", "sum_num_payments": 723, "sum_incomes": 135619.11000000002}, {"sum_num_cards": 6, "name": "Ocio", "sum_num_payments": 8, "sum_incomes": 272.8}, {"sum_num_cards": 11931, "name": "Transporte", "sum_num_payments": 16854, "sum_incomes": 593545.2599999998}]}, {"_id": 28015, "categories": [{"sum_num_cards": 9111, "name": "Transporte", "sum_num_payments": 11178, "sum_incomes": 427362.7599999997}, {"sum_num_cards": 1952, "name": "Deportes y juguetes", "sum_num_payments": 2107, "sum_incomes": 178421.93}, {"sum_num_cards": 7057, "name": "Salud y belleza", "sum_num_payments": 8913, "sum_incomes": 483790.68}, {"sum_num_cards": 189, "name": "Hoteles", "sum_num_payments": 285, "sum_incomes": 40244.16999999999}, {"sum_num_cards": 8816, "name": "Salud", "sum_num_payments": 11324, "sum_incomes": 1007263.6600000001}, {"sum_num_cards": 364, "name": "Viajes", "sum_num_payments": 642, "sum_incomes": 323145.84}, {"sum_num_cards": 3390, "name": "Ocio", "sum_num_payments": 3928, "sum_incomes": 120384.7}, {"sum_num_cards": 11690, "name": "Comida", "sum_num_payments": 22184, "sum_incomes": 775927.1200000006}, {"sum_num_cards": 11690, "name": "Moda", "sum_num_payments": 22184, "sum_incomes": 775927.1200000006}, {"sum_num_cards": 15053, "name": "Otros servicios", "sum_num_payments": 17196, "sum_incomes": 794909.2300000001}, {"sum_num_cards": 20227, "name": "Bares y restaurantes", "sum_num_payments": 28155, "sum_incomes": 1028433.26}, {"sum_num_cards": 1699, "name": "Hogar", "sum_num_payments": 1919, "sum_incomes": 127446.26000000001}, {"sum_num_cards": 12913, "name": "Hipermercados", "sum_num_payments": 27808, "sum_incomes": 866425.5500000003}, {"sum_num_cards": 4319, "name": "Contenidos", "sum_num_payments": 4924, "sum_incomes": 238862.49000000005}, {"sum_num_cards": 2479, "name": "Tecnología", "sum_num_payments": 2730, "sum_incomes": 256613.51000000033}, {"sum_num_cards": 1722, "name": "Vehículos", "sum_num_payments": 1847, "sum_incomes": 512735.77000000014}]}, {"_id": 28028, "categories": [{"sum_num_cards": 3347, "name": "Transporte", "sum_num_payments": 4058, "sum_incomes": 179950.78000000003}, {"sum_num_cards": 356, "name": "Deportes y juguetes", "sum_num_payments": 397, "sum_incomes": 27619.809999999994}, {"sum_num_cards": 187, "name": "Viajes", "sum_num_payments": 591, "sum_incomes": 131177.18}, {"sum_num_cards": 2424, "name": "Otros servicios", "sum_num_payments": 2803, "sum_incomes": 211897.60000000015}, {"sum_num_cards": 51, "name": "Hoteles", "sum_num_payments": 59, "sum_incomes": 8535.130000000001}, {"sum_num_cards": 899, "name": "Tecnología", "sum_num_payments": 975, "sum_incomes": 100770.62999999999}, {"sum_num_cards": 6691, "name": "Salud", "sum_num_payments": 8479, "sum_incomes": 533070.2400000005}, {"sum_num_cards": 8490, "name": "Comida", "sum_num_payments": 16361, "sum_incomes": 572520.2400000001}, {"sum_num_cards": 8490, "name": "Moda", "sum_num_payments": 16361, "sum_incomes": 572520.2400000001}, {"sum_num_cards": 5185, "name": "Salud y belleza", "sum_num_payments": 6672, "sum_incomes": 333500.13999999996}, {"sum_num_cards": 779, "name": "Contenidos", "sum_num_payments": 885, "sum_incomes": 29931.879999999994}, {"sum_num_cards": 1876, "name": "Hogar", "sum_num_payments": 2076, "sum_incomes": 185549.00999999992}, {"sum_num_cards": 10501, "name": "Bares y restaurantes", "sum_num_payments": 14712, "sum_incomes": 529528.8399999999}, {"sum_num_cards": 1531, "name": "Vehículos", "sum_num_payments": 1667, "sum_incomes": 434813.4700000002}, {"sum_num_cards": 8965, "name": "Hipermercados", "sum_num_payments": 19617, "sum_incomes": 633235.9899999999}]}, {"_id": 28037, "categories": [{"sum_num_cards": 2889, "name": "Salud y belleza", "sum_num_payments": 3398, "sum_incomes": 130185.71999999999}, {"sum_num_cards": 4420, "name": "Tecnología", "sum_num_payments": 5018, "sum_incomes": 342620.6400000002}, {"sum_num_cards": 7820, "name": "Transporte", "sum_num_payments": 10780, "sum_incomes": 356894.78000000014}, {"sum_num_cards": 3738, "name": "Otros servicios", "sum_num_payments": 4940, "sum_incomes": 469250.58999999997}, {"sum_num_cards": 28, "name": "Ocio", "sum_num_payments": 30, "sum_incomes": 4367.18}, {"sum_num_cards": 255, "name": "Hoteles", "sum_num_payments": 358, "sum_incomes": 15847.309999999998}, {"sum_num_cards": 945, "name": "Hogar", "sum_num_payments": 1215, "sum_incomes": 161204.13000000006}, {"sum_num_cards": 2873, "name": "Salud", "sum_num_payments": 3711, "sum_incomes": 144340.05000000005}, {"sum_num_cards": 39235, "name": "Moda", "sum_num_payments": 60927, "sum_incomes": 1200331.9299999988}, {"sum_num_cards": 7793, "name": "Bares y restaurantes", "sum_num_payments": 21295, "sum_incomes": 413505.43000000017}, {"sum_num_cards": 160, "name": "Contenidos", "sum_num_payments": 167, "sum_incomes": 6583.33}, {"sum_num_cards": 1013, "name": "Vehículos", "sum_num_payments": 1093, "sum_incomes": 254469.00000000003}, {"sum_num_cards": 39235, "name": "Comida", "sum_num_payments": 60927, "sum_incomes": 1200331.9299999988}]}, {"_id": 28052, "categories": [{"sum_num_cards": 951, "name": "Transporte", "sum_num_payments": 1309, "sum_incomes": 55439.44999999998}, {"sum_num_cards": 26, "name": "Hogar", "sum_num_payments": 30, "sum_incomes": 2922.76}, {"sum_num_cards": 200, "name": "Bares y restaurantes", "sum_num_payments": 213, "sum_incomes": 18248.340000000004}, {"sum_num_cards": 50, "name": "Vehículos", "sum_num_payments": 53, "sum_incomes": 14393.310000000001}]}, {"_id": 28040, "categories": [{"sum_num_cards": 2836, "name": "Transporte", "sum_num_payments": 4471, "sum_incomes": 58705.439999999995}, {"sum_num_cards": 750, "name": "Otros servicios", "sum_num_payments": 952, "sum_incomes": 57447.79}, {"sum_num_cards": 1195, "name": "Salud", "sum_num_payments": 1366, "sum_incomes": 180931.87}, {"sum_num_cards": 496, "name": "Comida", "sum_num_payments": 611, "sum_incomes": 61218.44999999999}, {"sum_num_cards": 496, "name": "Moda", "sum_num_payments": 611, "sum_incomes": 61218.44999999999}, {"sum_num_cards": 551, "name": "Deportes y juguetes", "sum_num_payments": 649, "sum_incomes": 80020.93}, {"sum_num_cards": 482, "name": "Contenidos", "sum_num_payments": 598, "sum_incomes": 17966.450000000004}, {"sum_num_cards": 3023, "name": "Bares y restaurantes", "sum_num_payments": 4546, "sum_incomes": 176539.24999999985}, {"sum_num_cards": 323, "name": "Salud y belleza", "sum_num_payments": 376, "sum_incomes": 20697.46}, {"sum_num_cards": 214, "name": "Vehículos", "sum_num_payments": 224, "sum_incomes": 90675.5}]}, {"_id": 28022, "categories": [{"sum_num_cards": 118, "name": "Viajes", "sum_num_payments": 126, "sum_incomes": 47173.14}, {"sum_num_cards": 6697, "name": "Salud y belleza", "sum_num_payments": 7922, "sum_incomes": 346664.5600000001}, {"sum_num_cards": 10732, "name": "Tecnología", "sum_num_payments": 12360, "sum_incomes": 1194863.35}, {"sum_num_cards": 3679, "name": "Otros servicios", "sum_num_payments": 5270, "sum_incomes": 209116.01000000004}, {"sum_num_cards": 13665, "name": "Hipermercados", "sum_num_payments": 21021, "sum_incomes": 2274006.880000001}, {"sum_num_cards": 298, "name": "Hoteles", "sum_num_payments": 369, "sum_incomes": 55978.67}, {"sum_num_cards": 3547, "name": "Hogar", "sum_num_payments": 4008, "sum_incomes": 168225.32000000012}, {"sum_num_cards": 6337, "name": "Salud", "sum_num_payments": 8500, "sum_incomes": 359067.18999999977}, {"sum_num_cards": 29383, "name": "Comida", "sum_num_payments": 59784, "sum_incomes": 2559905.7899999996}, {"sum_num_cards": 7547, "name": "Deportes y juguetes", "sum_num_payments": 8670, "sum_incomes": 334655.24000000017}, {"sum_num_cards": 299, "name": "Contenidos", "sum_num_payments": 328, "sum_incomes": 8375.28}, {"sum_num_cards": 1071, "name": "Vehículos", "sum_num_payments": 1169, "sum_incomes": 291139.2400000001}, {"sum_num_cards": 15747, "name": "Bares y restaurantes", "sum_num_payments": 21944, "sum_incomes": 781613.1999999997}, {"sum_num_cards": 29383, "name": "Moda", "sum_num_payments": 59784, "sum_incomes": 2559905.7899999996}, {"sum_num_cards": 13720, "name": "Transporte", "sum_num_payments": 18887, "sum_incomes": 753448.7800000004}]}, {"_id": 28013, "categories": [{"sum_num_cards": 412, "name": "Viajes", "sum_num_payments": 460, "sum_incomes": 159783.51}, {"sum_num_cards": 646, "name": "Transporte", "sum_num_payments": 777, "sum_incomes": 138227.09000000003}, {"sum_num_cards": 21311, "name": "Tecnología", "sum_num_payments": 25925, "sum_incomes": 1730035.4500000011}, {"sum_num_cards": 51117, "name": "Hipermercados", "sum_num_payments": 85960, "sum_incomes": 4123926.8600000003}, {"sum_num_cards": 570, "name": "Hogar", "sum_num_payments": 605, "sum_incomes": 44670.12}, {"sum_num_cards": 7356, "name": "Salud", "sum_num_payments": 8776, "sum_incomes": 391741.46999999986}, {"sum_num_cards": 2126, "name": "Moda", "sum_num_payments": 3216, "sum_incomes": 79520.32999999994}, {"sum_num_cards": 7777, "name": "Salud y belleza", "sum_num_payments": 9095, "sum_incomes": 494991.1500000004}, {"sum_num_cards": 2884, "name": "Deportes y juguetes", "sum_num_payments": 3042, "sum_incomes": 153271.64000000007}, {"sum_num_cards": 40587, "name": "Bares y restaurantes", "sum_num_payments": 73292, "sum_incomes": 1814624.7599999988}, {"sum_num_cards": 1348, "name": "Hoteles", "sum_num_payments": 1588, "sum_incomes": 268551.41999999975}, {"sum_num_cards": 1601, "name": "Ocio", "sum_num_payments": 1831, "sum_incomes": 155093.81999999995}, {"sum_num_cards": 5125, "name": "Otros servicios", "sum_num_payments": 5728, "sum_incomes": 365786.2899999999}, {"sum_num_cards": 2126, "name": "Comida", "sum_num_payments": 3216, "sum_incomes": 79520.32999999994}, {"sum_num_cards": 12342, "name": "Contenidos", "sum_num_payments": 14335, "sum_incomes": 486607.4600000001}]}, {"_id": 28029, "categories": [{"sum_num_cards": 159, "name": "Viajes", "sum_num_payments": 345, "sum_incomes": 588774.3800000001}, {"sum_num_cards": 17374, "name": "Transporte", "sum_num_payments": 23405, "sum_incomes": 764515.8200000005}, {"sum_num_cards": 4473, "name": "Deportes y juguetes", "sum_num_payments": 4967, "sum_incomes": 227819.56000000008}, {"sum_num_cards": 7777, "name": "Otros servicios", "sum_num_payments": 9501, "sum_incomes": 350834.2199999998}, {"sum_num_cards": 57954, "name": "Hipermercados", "sum_num_payments": 119008, "sum_incomes": 5409084.159999998}, {"sum_num_cards": 5197, "name": "Hogar", "sum_num_payments": 6084, "sum_incomes": 246695.3199999998}, {"sum_num_cards": 15094, "name": "Salud y belleza", "sum_num_payments": 19329, "sum_incomes": 765721.7400000001}, {"sum_num_cards": 3396, "name": "Tecnología", "sum_num_payments": 3785, "sum_incomes": 311772.0799999999}, {"sum_num_cards": 19348, "name": "Comida", "sum_num_payments": 31747, "sum_incomes": 1621728.7799999989}, {"sum_num_cards": 9793, "name": "Salud", "sum_num_payments": 12559, "sum_incomes": 651181.9300000002}, {"sum_num_cards": 715, "name": "Contenidos", "sum_num_payments": 753, "sum_incomes": 18509.95}, {"sum_num_cards": 19348, "name": "Moda", "sum_num_payments": 31747, "sum_incomes": 1621728.7799999989}, {"sum_num_cards": 1263, "name": "Vehículos", "sum_num_payments": 1356, "sum_incomes": 355003.1099999998}, {"sum_num_cards": 21049, "name": "Bares y restaurantes", "sum_num_payments": 44991, "sum_incomes": 758450.1199999994}]}, {"_id": 28042, "categories": [{"sum_num_cards": 35, "name": "Viajes", "sum_num_payments": 38, "sum_incomes": 11840.08}, {"sum_num_cards": 28017, "name": "Transporte", "sum_num_payments": 38038, "sum_incomes": 1549636.5200000014}, {"sum_num_cards": 476, "name": "Tecnología", "sum_num_payments": 499, "sum_incomes": 28198.02}, {"sum_num_cards": 11163, "name": "Otros servicios", "sum_num_payments": 13098, "sum_incomes": 809031.9899999995}, {"sum_num_cards": 2336, "name": "Salud y belleza", "sum_num_payments": 2894, "sum_incomes": 159831.17}, {"sum_num_cards": 250, "name": "Hogar", "sum_num_payments": 283, "sum_incomes": 14371.929999999998}, {"sum_num_cards": 4580, "name": "Salud", "sum_num_payments": 6010, "sum_incomes": 250679.28999999998}, {"sum_num_cards": 11531, "name": "Comida", "sum_num_payments": 26009, "sum_incomes": 1180250.1899999988}, {"sum_num_cards": 2299, "name": "Contenidos", "sum_num_payments": 2433, "sum_incomes": 42065.530000000006}, {"sum_num_cards": 128, "name": "Deportes y juguetes", "sum_num_payments": 133, "sum_incomes": 4542.1900000000005}, {"sum_num_cards": 17113, "name": "Bares y restaurantes", "sum_num_payments": 25115, "sum_incomes": 568723.2800000006}, {"sum_num_cards": 576, "name": "Hoteles", "sum_num_payments": 677, "sum_incomes": 62781.53000000002}, {"sum_num_cards": 861, "name": "Ocio", "sum_num_payments": 965, "sum_incomes": 57254.89000000004}, {"sum_num_cards": 28745, "name": "Hipermercados", "sum_num_payments": 43935, "sum_incomes": 2615542.3999999994}, {"sum_num_cards": 11531, "name": "Moda", "sum_num_payments": 26009, "sum_incomes": 1180250.1899999988}, {"sum_num_cards": 541, "name": "Vehículos", "sum_num_payments": 592, "sum_incomes": 148097.68999999994}]}, {"_id": 28010, "categories": [{"sum_num_cards": 4290, "name": "Transporte", "sum_num_payments": 5390, "sum_incomes": 191029.9799999998}, {"sum_num_cards": 358, "name": "Ocio", "sum_num_payments": 374, "sum_incomes": 22799.04}, {"sum_num_cards": 84, "name": "Viajes", "sum_num_payments": 97, "sum_incomes": 29085.680000000004}, {"sum_num_cards": 6156, "name": "Otros servicios", "sum_num_payments": 7493, "sum_incomes": 994302.3200000001}, {"sum_num_cards": 9583, "name": "Salud", "sum_num_payments": 12415, "sum_incomes": 1028760.4699999994}, {"sum_num_cards": 1305, "name": "Deportes y juguetes", "sum_num_payments": 1442, "sum_incomes": 78733.63000000002}, {"sum_num_cards": 157, "name": "Hoteles", "sum_num_payments": 199, "sum_incomes": 27502.859999999997}, {"sum_num_cards": 5174, "name": "Moda", "sum_num_payments": 9656, "sum_incomes": 337090.51}, {"sum_num_cards": 8223, "name": "Hipermercados", "sum_num_payments": 15844, "sum_incomes": 546243.2199999995}, {"sum_num_cards": 5708, "name": "Contenidos", "sum_num_payments": 6380, "sum_incomes": 232399.26999999984}, {"sum_num_cards": 5174, "name": "Comida", "sum_num_payments": 9656, "sum_incomes": 337090.51}, {"sum_num_cards": 1346, "name": "Hogar", "sum_num_payments": 1495, "sum_incomes": 117426.48999999993}, {"sum_num_cards": 5771, "name": "Salud y belleza", "sum_num_payments": 7400, "sum_incomes": 429284.1200000006}, {"sum_num_cards": 21636, "name": "Bares y restaurantes", "sum_num_payments": 32978, "sum_incomes": 1203197.0600000003}, {"sum_num_cards": 248, "name": "Vehículos", "sum_num_payments": 265, "sum_incomes": 68752.05999999997}, {"sum_num_cards": 539, "name": "Tecnología", "sum_num_payments": 580, "sum_incomes": 60666.24000000002}]}, {"_id": 28004, "categories": [{"sum_num_cards": 14273, "name": "Salud y belleza", "sum_num_payments": 16926, "sum_incomes": 878587.6099999998}, {"sum_num_cards": 3251, "name": "Tecnología", "sum_num_payments": 4368, "sum_incomes": 324727.88999999996}, {"sum_num_cards": 2780, "name": "Deportes y juguetes", "sum_num_payments": 3008, "sum_incomes": 153906.85000000006}, {"sum_num_cards": 387, "name": "Hoteles", "sum_num_payments": 456, "sum_incomes": 50512.88999999999}, {"sum_num_cards": 3507, "name": "Hogar", "sum_num_payments": 3971, "sum_incomes": 189199.20999999993}, {"sum_num_cards": 9553, "name": "Comida", "sum_num_payments": 16602, "sum_incomes": 408884.6099999995}, {"sum_num_cards": 9553, "name": "Moda", "sum_num_payments": 16602, "sum_incomes": 408884.6099999995}, {"sum_num_cards": 10778, "name": "Otros servicios", "sum_num_payments": 13161, "sum_incomes": 724990.4500000001}, {"sum_num_cards": 3888, "name": "Transporte", "sum_num_payments": 4722, "sum_incomes": 46314.04999999998}, {"sum_num_cards": 842, "name": "Ocio", "sum_num_payments": 925, "sum_incomes": 56482.759999999995}, {"sum_num_cards": 43087, "name": "Bares y restaurantes", "sum_num_payments": 70793, "sum_incomes": 2359243.9000000004}, {"sum_num_cards": 3649, "name": "Contenidos", "sum_num_payments": 4220, "sum_incomes": 191341.75000000006}, {"sum_num_cards": 6644, "name": "Salud", "sum_num_payments": 8220, "sum_incomes": 463329.9199999997}, {"sum_num_cards": 59, "name": "Viajes", "sum_num_payments": 70, "sum_incomes": 23289.48}, {"sum_num_cards": 61, "name": "Vehículos", "sum_num_payments": 69, "sum_incomes": 7804.65}]}, {"_id": 28006, "categories": [{"sum_num_cards": 11043, "name": "Salud y belleza", "sum_num_payments": 14169, "sum_incomes": 954997.5200000003}, {"sum_num_cards": 229, "name": "Viajes", "sum_num_payments": 435, "sum_incomes": 169656.87000000002}, {"sum_num_cards": 17199, "name": "Transporte", "sum_num_payments": 23568, "sum_incomes": 734126.3699999999}, {"sum_num_cards": 3743, "name": "Deportes y juguetes", "sum_num_payments": 4382, "sum_incomes": 336716.2899999999}, {"sum_num_cards": 695, "name": "Hoteles", "sum_num_payments": 806, "sum_incomes": 126019.76999999999}, {"sum_num_cards": 4177, "name": "Hogar", "sum_num_payments": 4821, "sum_incomes": 468774.78000000026}, {"sum_num_cards": 18478, "name": "Hipermercados", "sum_num_payments": 36272, "sum_incomes": 1773174.3999999983}, {"sum_num_cards": 10760, "name": "Salud", "sum_num_payments": 13413, "sum_incomes": 1196719.1200000003}, {"sum_num_cards": 684, "name": "Ocio", "sum_num_payments": 764, "sum_incomes": 40974.88999999997}, {"sum_num_cards": 14148, "name": "Comida", "sum_num_payments": 22773, "sum_incomes": 880934.7999999993}, {"sum_num_cards": 8403, "name": "Otros servicios", "sum_num_payments": 11202, "sum_incomes": 494271.72999999963}, {"sum_num_cards": 2642, "name": "Tecnología", "sum_num_payments": 2833, "sum_incomes": 213200.8800000001}, {"sum_num_cards": 14148, "name": "Moda", "sum_num_payments": 22773, "sum_incomes": 880934.7999999993}, {"sum_num_cards": 35278, "name": "Bares y restaurantes", "sum_num_payments": 56414, "sum_incomes": 2359205.820000002}, {"sum_num_cards": 2443, "name": "Contenidos", "sum_num_payments": 2751, "sum_incomes": 94483.08}, {"sum_num_cards": 815, "name": "Vehículos", "sum_num_payments": 876, "sum_incomes": 197801.6400000001}]}, {"_id": 28048, "categories": [{"sum_num_cards": 3768, "name": "Transporte", "sum_num_payments": 4594, "sum_incomes": 209682.1300000001}, {"sum_num_cards": 959, "name": "Bares y restaurantes", "sum_num_payments": 1102, "sum_incomes": 102173.28000000003}]}, {"_id": 28009, "categories": [{"sum_num_cards": 9698, "name": "Salud y belleza", "sum_num_payments": 12100, "sum_incomes": 697905.3600000001}, {"sum_num_cards": 59808, "name": "Transporte", "sum_num_payments": 119451, "sum_incomes": 1207624.01}, {"sum_num_cards": 5151, "name": "Otros servicios", "sum_num_payments": 6276, "sum_incomes": 416387.74999999994}, {"sum_num_cards": 1850, "name": "Deportes y juguetes", "sum_num_payments": 2028, "sum_incomes": 154511.18999999994}, {"sum_num_cards": 42130, "name": "Hipermercados", "sum_num_payments": 75374, "sum_incomes": 3951092.689999998}, {"sum_num_cards": 178, "name": "Viajes", "sum_num_payments": 242, "sum_incomes": 123130.24999999997}, {"sum_num_cards": 78, "name": "Hoteles", "sum_num_payments": 84, "sum_incomes": 13591.050000000001}, {"sum_num_cards": 7502, "name": "Moda", "sum_num_payments": 14560, "sum_incomes": 473082.55999999994}, {"sum_num_cards": 4823, "name": "Contenidos", "sum_num_payments": 5304, "sum_incomes": 161536.18999999992}, {"sum_num_cards": 1180, "name": "Ocio", "sum_num_payments": 1370, "sum_incomes": 72686.36000000003}, {"sum_num_cards": 2181, "name": "Tecnología", "sum_num_payments": 2395, "sum_incomes": 227610.36000000007}, {"sum_num_cards": 16813, "name": "Bares y restaurantes", "sum_num_payments": 22512, "sum_incomes": 1313071.4499999974}, {"sum_num_cards": 11394, "name": "Salud", "sum_num_payments": 14456, "sum_incomes": 1125359.7999999996}, {"sum_num_cards": 1038, "name": "Hogar", "sum_num_payments": 1143, "sum_incomes": 137661.32999999993}, {"sum_num_cards": 7502, "name": "Comida", "sum_num_payments": 14560, "sum_incomes": 473082.55999999994}, {"sum_num_cards": 726, "name": "Vehículos", "sum_num_payments": 758, "sum_incomes": 188997.15999999995}]}, {"_id": 28017, "categories": [{"sum_num_cards": 2448, "name": "Salud y belleza", "sum_num_payments": 2916, "sum_incomes": 128833.14000000001}, {"sum_num_cards": 93, "name": "Viajes", "sum_num_payments": 109, "sum_incomes": 35745.58}, {"sum_num_cards": 11652, "name": "Transporte", "sum_num_payments": 15760, "sum_incomes": 514758.0000000005}, {"sum_num_cards": 2915, "name": "Otros servicios", "sum_num_payments": 4435, "sum_incomes": 178969.28000000014}, {"sum_num_cards": 4313, "name": "Salud", "sum_num_payments": 5513, "sum_incomes": 265396.97000000003}, {"sum_num_cards": 16907, "name": "Comida", "sum_num_payments": 37020, "sum_incomes": 1184792.07}, {"sum_num_cards": 445, "name": "Tecnología", "sum_num_payments": 473, "sum_incomes": 39766.10999999999}, {"sum_num_cards": 702, "name": "Hogar", "sum_num_payments": 828, "sum_incomes": 70918.38000000002}, {"sum_num_cards": 16907, "name": "Moda", "sum_num_payments": 37020, "sum_incomes": 1184792.07}, {"sum_num_cards": 235, "name": "Deportes y juguetes", "sum_num_payments": 240, "sum_incomes": 27233.279999999995}, {"sum_num_cards": 2879, "name": "Bares y restaurantes", "sum_num_payments": 3618, "sum_incomes": 161096.81000000003}, {"sum_num_cards": 144, "name": "Contenidos", "sum_num_payments": 157, "sum_incomes": 5412.16}, {"sum_num_cards": 1146, "name": "Vehículos", "sum_num_payments": 1211, "sum_incomes": 209598.25}]}, {"_id": 28003, "categories": [{"sum_num_cards": 131, "name": "Viajes", "sum_num_payments": 155, "sum_incomes": 67682.42000000001}, {"sum_num_cards": 14595, "name": "Transporte", "sum_num_payments": 18685, "sum_incomes": 820393.1700000006}, {"sum_num_cards": 1207, "name": "Tecnología", "sum_num_payments": 1304, "sum_incomes": 161663.53000000003}, {"sum_num_cards": 335, "name": "Deportes y juguetes", "sum_num_payments": 365, "sum_incomes": 43807.94000000001}, {"sum_num_cards": 7629, "name": "Salud y belleza", "sum_num_payments": 9750, "sum_incomes": 529931.0399999993}, {"sum_num_cards": 802, "name": "Ocio", "sum_num_payments": 1053, "sum_incomes": 66200.79}, {"sum_num_cards": 991, "name": "Hogar", "sum_num_payments": 1090, "sum_incomes": 111401.80000000005}, {"sum_num_cards": 10480, "name": "Comida", "sum_num_payments": 20529, "sum_incomes": 734290.5900000003}, {"sum_num_cards": 8392, "name": "Salud", "sum_num_payments": 10507, "sum_incomes": 982394.4699999996}, {"sum_num_cards": 245, "name": "Hoteles", "sum_num_payments": 306, "sum_incomes": 39030.81}, {"sum_num_cards": 797, "name": "Contenidos", "sum_num_payments": 883, "sum_incomes": 33582.05}, {"sum_num_cards": 10480, "name": "Moda", "sum_num_payments": 20529, "sum_incomes": 734290.5900000003}, {"sum_num_cards": 3800, "name": "Otros servicios", "sum_num_payments": 5023, "sum_incomes": 353265.1099999999}, {"sum_num_cards": 56220, "name": "Hipermercados", "sum_num_payments": 109922, "sum_incomes": 6541418.669999994}, {"sum_num_cards": 20730, "name": "Bares y restaurantes", "sum_num_payments": 30902, "sum_incomes": 1167683.3700000003}, {"sum_num_cards": 1583, "name": "Vehículos", "sum_num_payments": 1706, "sum_incomes": 413034.21999999986}]}, {"_id": 28026, "categories": [{"sum_num_cards": 2388, "name": "Salud y belleza", "sum_num_payments": 2940, "sum_incomes": 108257.23999999999}, {"sum_num_cards": 722, "name": "Tecnología", "sum_num_payments": 788, "sum_incomes": 63306.59}, {"sum_num_cards": 5896, "name": "Deportes y juguetes", "sum_num_payments": 6540, "sum_incomes": 342097.8099999997}, {"sum_num_cards": 1157, "name": "Otros servicios", "sum_num_payments": 1443, "sum_incomes": 69952.02}, {"sum_num_cards": 356, "name": "Hogar", "sum_num_payments": 413, "sum_incomes": 45864.84}, {"sum_num_cards": 12835, "name": "Moda", "sum_num_payments": 29091, "sum_incomes": 968963.1000000002}, {"sum_num_cards": 2656, "name": "Salud", "sum_num_payments": 3550, "sum_incomes": 194973.84999999995}, {"sum_num_cards": 13221, "name": "Transporte", "sum_num_payments": 17746, "sum_incomes": 675477.7799999994}, {"sum_num_cards": 155, "name": "Contenidos", "sum_num_payments": 166, "sum_incomes": 4733.67}, {"sum_num_cards": 12835, "name": "Comida", "sum_num_payments": 29091, "sum_incomes": 968963.1000000002}, {"sum_num_cards": 4666, "name": "Bares y restaurantes", "sum_num_payments": 6179, "sum_incomes": 254537.22999999998}, {"sum_num_cards": 65, "name": "Viajes", "sum_num_payments": 73, "sum_incomes": 23920.38}, {"sum_num_cards": 773, "name": "Vehículos", "sum_num_payments": 841, "sum_incomes": 142044.29000000007}]}, {"_id": 28023, "categories": [{"sum_num_cards": 26326, "name": "Transporte", "sum_num_payments": 35043, "sum_incomes": 1487313.1199999982}, {"sum_num_cards": 213, "name": "Tecnología", "sum_num_payments": 229, "sum_incomes": 20635.539999999997}, {"sum_num_cards": 2493, "name": "Deportes y juguetes", "sum_num_payments": 2865, "sum_incomes": 160640.23000000013}, {"sum_num_cards": 4671, "name": "Otros servicios", "sum_num_payments": 6641, "sum_incomes": 150401.34999999992}, {"sum_num_cards": 2624, "name": "Salud", "sum_num_payments": 3769, "sum_incomes": 256217.85}, {"sum_num_cards": 10, "name": "Viajes", "sum_num_payments": 12, "sum_incomes": 3830.01}, {"sum_num_cards": 48759, "name": "Hipermercados", "sum_num_payments": 83115, "sum_incomes": 5338093.120000004}, {"sum_num_cards": 24, "name": "Hoteles", "sum_num_payments": 26, "sum_incomes": 2740.1}, {"sum_num_cards": 12966, "name": "Bares y restaurantes", "sum_num_payments": 18826, "sum_incomes": 782182.4699999994}, {"sum_num_cards": 12366, "name": "Moda", "sum_num_payments": 22837, "sum_incomes": 1376670.109999999}, {"sum_num_cards": 2443, "name": "Salud y belleza", "sum_num_payments": 3135, "sum_incomes": 223142.5000000002}, {"sum_num_cards": 697, "name": "Hogar", "sum_num_payments": 772, "sum_incomes": 31755.489999999987}, {"sum_num_cards": 12366, "name": "Comida", "sum_num_payments": 22837, "sum_incomes": 1376670.109999999}, {"sum_num_cards": 236, "name": "Vehículos", "sum_num_payments": 258, "sum_incomes": 64722.14}, {"sum_num_cards": 412, "name": "Contenidos", "sum_num_payments": 467, "sum_incomes": 17603.58}]}, {"_id": 28007, "categories": [{"sum_num_cards": 7505, "name": "Salud y belleza", "sum_num_payments": 9963, "sum_incomes": 473150.38000000006}, {"sum_num_cards": 289704, "name": "Transporte", "sum_num_payments": 439519, "sum_incomes": 12481682.840000004}, {"sum_num_cards": 3995, "name": "Otros servicios", "sum_num_payments": 5393, "sum_incomes": 275950.42}, {"sum_num_cards": 26, "name": "Ocio", "sum_num_payments": 28, "sum_incomes": 2289}, {"sum_num_cards": 5408, "name": "Hipermercados", "sum_num_payments": 11087, "sum_incomes": 397900.6099999999}, {"sum_num_cards": 2015, "name": "Deportes y juguetes", "sum_num_payments": 2201, "sum_incomes": 148492.06999999998}, {"sum_num_cards": 18367, "name": "Comida", "sum_num_payments": 46514, "sum_incomes": 1628542.6599999992}, {"sum_num_cards": 67, "name": "Hoteles", "sum_num_payments": 78, "sum_incomes": 8841.140000000001}, {"sum_num_cards": 932, "name": "Hogar", "sum_num_payments": 1031, "sum_incomes": 83476.24999999996}, {"sum_num_cards": 8930, "name": "Bares y restaurantes", "sum_num_payments": 14117, "sum_incomes": 456991.4900000006}, {"sum_num_cards": 8347, "name": "Salud", "sum_num_payments": 11323, "sum_incomes": 755470.2199999996}, {"sum_num_cards": 18367, "name": "Moda", "sum_num_payments": 46514, "sum_incomes": 1628542.6599999992}, {"sum_num_cards": 525, "name": "Contenidos", "sum_num_payments": 678, "sum_incomes": 22041.909999999996}, {"sum_num_cards": 1304, "name": "Tecnología", "sum_num_payments": 1422, "sum_incomes": 102569.05000000005}, {"sum_num_cards": 2677, "name": "Vehículos", "sum_num_payments": 2889, "sum_incomes": 691421.9200000005}, {"sum_num_cards": 70, "name": "Viajes", "sum_num_payments": 84, "sum_incomes": 39277.08}]}, {"_id": 28044, "categories": [{"sum_num_cards": 12423, "name": "Transporte", "sum_num_payments": 16283, "sum_incomes": 631583.9900000003}, {"sum_num_cards": 1047, "name": "Tecnología", "sum_num_payments": 1120, "sum_incomes": 90070.62999999999}, {"sum_num_cards": 774, "name": "Deportes y juguetes", "sum_num_payments": 828, "sum_incomes": 40600.119999999995}, {"sum_num_cards": 805, "name": "Otros servicios", "sum_num_payments": 984, "sum_incomes": 44937.10999999998}, {"sum_num_cards": 5215, "name": "Salud", "sum_num_payments": 6489, "sum_incomes": 282446.8899999999}, {"sum_num_cards": 2257, "name": "Salud y belleza", "sum_num_payments": 2607, "sum_incomes": 108652.95999999999}, {"sum_num_cards": 203, "name": "Contenidos", "sum_num_payments": 216, "sum_incomes": 5358.8099999999995}, {"sum_num_cards": 9677, "name": "Moda", "sum_num_payments": 17500, "sum_incomes": 626485.3400000002}, {"sum_num_cards": 2596, "name": "Bares y restaurantes", "sum_num_payments": 3528, "sum_incomes": 116369.65999999999}, {"sum_num_cards": 347, "name": "Hogar", "sum_num_payments": 386, "sum_incomes": 18853.57}, {"sum_num_cards": 907, "name": "Vehículos", "sum_num_payments": 972, "sum_incomes": 265243.36000000004}, {"sum_num_cards": 9677, "name": "Comida", "sum_num_payments": 17500, "sum_incomes": 626485.3400000002}]}, {"_id": 28027, "categories": [{"sum_num_cards": 26923, "name": "Transporte", "sum_num_payments": 36656, "sum_incomes": 1538524.3200000003}, {"sum_num_cards": 1544, "name": "Deportes y juguetes", "sum_num_payments": 1656, "sum_incomes": 100971.91999999997}, {"sum_num_cards": 5953, "name": "Otros servicios", "sum_num_payments": 8103, "sum_incomes": 429350.0}, {"sum_num_cards": 329, "name": "Ocio", "sum_num_payments": 573, "sum_incomes": 28870.950000000004}, {"sum_num_cards": 11545, "name": "Hipermercados", "sum_num_payments": 61065, "sum_incomes": 5758826.4300000025}, {"sum_num_cards": 2535, "name": "Hogar", "sum_num_payments": 2832, "sum_incomes": 175504.1100000001}, {"sum_num_cards": 9195, "name": "Salud y belleza", "sum_num_payments": 11429, "sum_incomes": 575492.0199999999}, {"sum_num_cards": 180, "name": "Viajes", "sum_num_payments": 395, "sum_incomes": 119343.65999999999}, {"sum_num_cards": 8120, "name": "Salud", "sum_num_payments": 10561, "sum_incomes": 600373.4400000002}, {"sum_num_cards": 21168, "name": "Comida", "sum_num_payments": 46766, "sum_incomes": 1507944.1699999997}, {"sum_num_cards": 21168, "name": "Moda", "sum_num_payments": 46766, "sum_incomes": 1507944.1699999997}, {"sum_num_cards": 1494, "name": "Contenidos", "sum_num_payments": 1681, "sum_incomes": 56152.73000000001}, {"sum_num_cards": 323, "name": "Hoteles", "sum_num_payments": 452, "sum_incomes": 31119.41}, {"sum_num_cards": 14554, "name": "Bares y restaurantes", "sum_num_payments": 25451, "sum_incomes": 758594.61}, {"sum_num_cards": 1349, "name": "Vehículos", "sum_num_payments": 1499, "sum_incomes": 355338.20999999996}, {"sum_num_cards": 2251, "name": "Tecnología", "sum_num_payments": 2491, "sum_incomes": 227541.89999999988}]}, {"_id": 28032, "categories": [{"sum_num_cards": 3707, "name": "Salud y belleza", "sum_num_payments": 4444, "sum_incomes": 187092.57}, {"sum_num_cards": 1814, "name": "Tecnología", "sum_num_payments": 1964, "sum_incomes": 176266.38999999996}, {"sum_num_cards": 2268, "name": "Otros servicios", "sum_num_payments": 3084, "sum_incomes": 113630.34999999995}, {"sum_num_cards": 17, "name": "Hoteles", "sum_num_payments": 31, "sum_incomes": 4967.530000000001}, {"sum_num_cards": 5885, "name": "Salud", "sum_num_payments": 7899, "sum_incomes": 324194.8899999999}, {"sum_num_cards": 15393, "name": "Moda", "sum_num_payments": 33570, "sum_incomes": 1403765.3000000003}, {"sum_num_cards": 610, "name": "Contenidos", "sum_num_payments": 665, "sum_incomes": 18936.269999999997}, {"sum_num_cards": 10772, "name": "Transporte", "sum_num_payments": 14950, "sum_incomes": 533200.93}, {"sum_num_cards": 7764, "name": "Bares y restaurantes", "sum_num_payments": 10471, "sum_incomes": 269594.19000000006}, {"sum_num_cards": 901, "name": "Ocio", "sum_num_payments": 1013, "sum_incomes": 43976.53000000001}, {"sum_num_cards": 89, "name": "Viajes", "sum_num_payments": 98, "sum_incomes": 26286.489999999998}, {"sum_num_cards": 15393, "name": "Comida", "sum_num_payments": 33570, "sum_incomes": 1403765.3000000003}, {"sum_num_cards": 1684, "name": "Hogar", "sum_num_payments": 1990, "sum_incomes": 110620.36}, {"sum_num_cards": 1284, "name": "Deportes y juguetes", "sum_num_payments": 1410, "sum_incomes": 69617.26000000002}, {"sum_num_cards": 146, "name": "Vehículos", "sum_num_payments": 156, "sum_incomes": 30558.1}]}, {"_id": 28036, "categories": [{"sum_num_cards": 4910, "name": "Salud y belleza", "sum_num_payments": 6228, "sum_incomes": 448242.31999999954}, {"sum_num_cards": 49285, "name": "Transporte", "sum_num_payments": 75132, "sum_incomes": 1716260.2699999993}, {"sum_num_cards": 2508, "name": "Tecnología", "sum_num_payments": 2667, "sum_incomes": 134179.87999999992}, {"sum_num_cards": 815, "name": "Deportes y juguetes", "sum_num_payments": 861, "sum_incomes": 41040.31999999999}, {"sum_num_cards": 2104, "name": "Otros servicios", "sum_num_payments": 2468, "sum_incomes": 150176.99999999997}, {"sum_num_cards": 2109, "name": "Ocio", "sum_num_payments": 2362, "sum_incomes": 270237.35000000003}, {"sum_num_cards": 282, "name": "Hoteles", "sum_num_payments": 383, "sum_incomes": 42022.18}, {"sum_num_cards": 2427, "name": "Hogar", "sum_num_payments": 2886, "sum_incomes": 199383.77000000008}, {"sum_num_cards": 6893, "name": "Moda", "sum_num_payments": 14396, "sum_incomes": 529117.9000000001}, {"sum_num_cards": 356, "name": "Contenidos", "sum_num_payments": 401, "sum_incomes": 17148.339999999997}, {"sum_num_cards": 6893, "name": "Comida", "sum_num_payments": 14396, "sum_incomes": 529117.9000000001}, {"sum_num_cards": 70, "name": "Viajes", "sum_num_payments": 395, "sum_incomes": 67317.01999999999}, {"sum_num_cards": 26239, "name": "Bares y restaurantes", "sum_num_payments": 40656, "sum_incomes": 2006930.0699999984}, {"sum_num_cards": 1500, "name": "Vehículos", "sum_num_payments": 1691, "sum_incomes": 246120.3600000001}, {"sum_num_cards": 6674, "name": "Salud", "sum_num_payments": 8393, "sum_incomes": 546374.0099999994}]}, {"_id": 28020, "categories": [{"sum_num_cards": 10560, "name": "Salud y belleza", "sum_num_payments": 13104, "sum_incomes": 633694.4200000002}, {"sum_num_cards": 11797, "name": "Transporte", "sum_num_payments": 14288, "sum_incomes": 887824.3599999992}, {"sum_num_cards": 63, "name": "Viajes", "sum_num_payments": 128, "sum_incomes": 43293.12999999999}, {"sum_num_cards": 6053, "name": "Otros servicios", "sum_num_payments": 7803, "sum_incomes": 333599.62}, {"sum_num_cards": 3129, "name": "Deportes y juguetes", "sum_num_payments": 3450, "sum_incomes": 288940.0500000001}, {"sum_num_cards": 5842, "name": "Hipermercados", "sum_num_payments": 11506, "sum_incomes": 323895.1299999999}, {"sum_num_cards": 4413, "name": "Hogar", "sum_num_payments": 5340, "sum_incomes": 440663.2599999999}, {"sum_num_cards": 10754, "name": "Salud", "sum_num_payments": 13641, "sum_incomes": 1057330.6199999999}, {"sum_num_cards": 25020, "name": "Moda", "sum_num_payments": 48620, "sum_incomes": 1648797.1199999987}, {"sum_num_cards": 527, "name": "Hoteles", "sum_num_payments": 662, "sum_incomes": 106632.29000000005}, {"sum_num_cards": 25020, "name": "Comida", "sum_num_payments": 48620, "sum_incomes": 1648797.1199999987}, {"sum_num_cards": 2724, "name": "Contenidos", "sum_num_payments": 3079, "sum_incomes": 97143.22000000003}, {"sum_num_cards": 277, "name": "Ocio", "sum_num_payments": 612, "sum_incomes": 54777.6}, {"sum_num_cards": 36745, "name": "Bares y restaurantes", "sum_num_payments": 56300, "sum_incomes": 2645470.0100000007}, {"sum_num_cards": 832, "name": "Vehículos", "sum_num_payments": 872, "sum_incomes": 238614.4900000001}, {"sum_num_cards": 5095, "name": "Tecnología", "sum_num_payments": 5595, "sum_incomes": 739544.3599999999}]}, {"_id": 28038, "categories": [{"sum_num_cards": 3123, "name": "Salud y belleza", "sum_num_payments": 3642, "sum_incomes": 149087.9400000001}, {"sum_num_cards": 10240, "name": "Transporte", "sum_num_payments": 13346, "sum_incomes": 459856.89000000013}, {"sum_num_cards": 67, "name": "Viajes", "sum_num_payments": 75, "sum_incomes": 30219.819999999996}, {"sum_num_cards": 2674, "name": "Otros servicios", "sum_num_payments": 3472, "sum_incomes": 219087.27000000014}, {"sum_num_cards": 24970, "name": "Hipermercados", "sum_num_payments": 45946, "sum_incomes": 1917760.2299999993}, {"sum_num_cards": 799, "name": "Tecnología", "sum_num_payments": 930, "sum_incomes": 86739.26000000002}, {"sum_num_cards": 926, "name": "Hogar", "sum_num_payments": 1034, "sum_incomes": 66732.46999999999}, {"sum_num_cards": 306, "name": "Ocio", "sum_num_payments": 523, "sum_incomes": 30433.250000000004}, {"sum_num_cards": 3471, "name": "Salud", "sum_num_payments": 4397, "sum_incomes": 228070.37999999998}, {"sum_num_cards": 11709, "name": "Comida", "sum_num_payments": 26034, "sum_incomes": 825805.0099999998}, {"sum_num_cards": 1612, "name": "Deportes y juguetes", "sum_num_payments": 1720, "sum_incomes": 64863.960000000036}, {"sum_num_cards": 100, "name": "Contenidos", "sum_num_payments": 108, "sum_incomes": 2811.9500000000003}, {"sum_num_cards": 3719, "name": "Bares y restaurantes", "sum_num_payments": 4587, "sum_incomes": 121046.93000000011}, {"sum_num_cards": 11709, "name": "Moda", "sum_num_payments": 26034, "sum_incomes": 825805.0099999998}, {"sum_num_cards": 245, "name": "Vehículos", "sum_num_payments": 254, "sum_incomes": 40717.6}]}, {"_id": 28030, "categories": [{"sum_num_cards": 3651, "name": "Salud y belleza", "sum_num_payments": 4433, "sum_incomes": 190499.13000000003}, {"sum_num_cards": 88, "name": "Viajes", "sum_num_payments": 98, "sum_incomes": 48852.82}, {"sum_num_cards": 10188, "name": "Transporte", "sum_num_payments": 13218, "sum_incomes": 508537.8899999998}, {"sum_num_cards": 778, "name": "Tecnología", "sum_num_payments": 854, "sum_incomes": 76990.83}, {"sum_num_cards": 174, "name": "Deportes y juguetes", "sum_num_payments": 189, "sum_incomes": 10773.560000000003}, {"sum_num_cards": 2071, "name": "Otros servicios", "sum_num_payments": 2657, "sum_incomes": 111246.68000000004}, {"sum_num_cards": 6816, "name": "Salud", "sum_num_payments": 8967, "sum_incomes": 526839.6599999998}, {"sum_num_cards": 617, "name": "Hogar", "sum_num_payments": 681, "sum_incomes": 45736.549999999996}, {"sum_num_cards": 23518, "name": "Moda", "sum_num_payments": 49355, "sum_incomes": 2056312.4099999995}, {"sum_num_cards": 109, "name": "Contenidos", "sum_num_payments": 114, "sum_incomes": 2877.3500000000004}, {"sum_num_cards": 30029, "name": "Hipermercados", "sum_num_payments": 58206, "sum_incomes": 2986888.170000003}, {"sum_num_cards": 4081, "name": "Bares y restaurantes", "sum_num_payments": 5818, "sum_incomes": 167591.89000000022}, {"sum_num_cards": 23518, "name": "Comida", "sum_num_payments": 49355, "sum_incomes": 2056312.4099999995}, {"sum_num_cards": 543, "name": "Vehículos", "sum_num_payments": 573, "sum_incomes": 109631.81000000001}]}, {"_id": 28045, "categories": [{"sum_num_cards": 44014, "name": "Transporte", "sum_num_payments": 88126, "sum_incomes": 7606075.970000004}, {"sum_num_cards": 629, "name": "Deportes y juguetes", "sum_num_payments": 685, "sum_incomes": 68043.09000000004}, {"sum_num_cards": 5015, "name": "Otros servicios", "sum_num_payments": 6395, "sum_incomes": 444736.8499999999}, {"sum_num_cards": 230, "name": "Viajes", "sum_num_payments": 274, "sum_incomes": 58862.43000000001}, {"sum_num_cards": 89, "name": "Hoteles", "sum_num_payments": 106, "sum_incomes": 9912.99}, {"sum_num_cards": 2852, "name": "Hogar", "sum_num_payments": 3369, "sum_incomes": 257433.10999999987}, {"sum_num_cards": 1327, "name": "Tecnología", "sum_num_payments": 1455, "sum_incomes": 107179.30000000003}, {"sum_num_cards": 8465, "name": "Salud", "sum_num_payments": 11350, "sum_incomes": 573149.3600000002}, {"sum_num_cards": 1818, "name": "Ocio", "sum_num_payments": 2213, "sum_incomes": 65668.11000000002}, {"sum_num_cards": 18178, "name": "Hipermercados", "sum_num_payments": 31171, "sum_incomes": 1658164.0299999993}, {"sum_num_cards": 6439, "name": "Salud y belleza", "sum_num_payments": 8498, "sum_incomes": 346276.7199999999}, {"sum_num_cards": 22538, "name": "Comida", "sum_num_payments": 58644, "sum_incomes": 1880881.9999999974}, {"sum_num_cards": 13919, "name": "Bares y restaurantes", "sum_num_payments": 20550, "sum_incomes": 683279.0000000002}, {"sum_num_cards": 1232, "name": "Vehículos", "sum_num_payments": 1313, "sum_incomes": 231060.46000000005}, {"sum_num_cards": 22538, "name": "Moda", "sum_num_payments": 58644, "sum_incomes": 1880881.9999999974}, {"sum_num_cards": 567, "name": "Contenidos", "sum_num_payments": 642, "sum_incomes": 20456.95}]}, {"_id": 28033, "categories": [{"sum_num_cards": 31, "name": "Viajes", "sum_num_payments": 32, "sum_incomes": 13923.629999999997}, {"sum_num_cards": 42861, "name": "Transporte", "sum_num_payments": 209464, "sum_incomes": 1531261.2700000026}, {"sum_num_cards": 483, "name": "Hoteles", "sum_num_payments": 649, "sum_incomes": 52256.01000000001}, {"sum_num_cards": 235, "name": "Deportes y juguetes", "sum_num_payments": 258, "sum_incomes": 22909.06}, {"sum_num_cards": 513, "name": "Hogar", "sum_num_payments": 577, "sum_incomes": 30692.67}, {"sum_num_cards": 364, "name": "Tecnología", "sum_num_payments": 400, "sum_incomes": 31625.839999999997}, {"sum_num_cards": 123, "name": "Ocio", "sum_num_payments": 151, "sum_incomes": 9207.38}, {"sum_num_cards": 7127, "name": "Salud", "sum_num_payments": 9584, "sum_incomes": 563172.0200000001}, {"sum_num_cards": 3055, "name": "Otros servicios", "sum_num_payments": 4215, "sum_incomes": 207372.22}, {"sum_num_cards": 4424, "name": "Salud y belleza", "sum_num_payments": 5560, "sum_incomes": 282425.7899999998}, {"sum_num_cards": 3960, "name": "Hipermercados", "sum_num_payments": 8499, "sum_incomes": 291426.18000000005}, {"sum_num_cards": 11260, "name": "Comida", "sum_num_payments": 26890, "sum_incomes": 963682.4599999994}, {"sum_num_cards": 551, "name": "Vehículos", "sum_num_payments": 582, "sum_incomes": 123943.39000000001}, {"sum_num_cards": 10758, "name": "Bares y restaurantes", "sum_num_payments": 24295, "sum_incomes": 503094.6799999999}, {"sum_num_cards": 676, "name": "Contenidos", "sum_num_payments": 749, "sum_incomes": 21685.329999999998}, {"sum_num_cards": 11260, "name": "Moda", "sum_num_payments": 26890, "sum_incomes": 963682.4599999994}]}, {"_id": 28024, "categories": [{"sum_num_cards": 40, "name": "Viajes", "sum_num_payments": 43, "sum_incomes": 13019.199999999997}, {"sum_num_cards": 307, "name": "Tecnología", "sum_num_payments": 328, "sum_incomes": 27872.480000000003}, {"sum_num_cards": 55, "name": "Deportes y juguetes", "sum_num_payments": 59, "sum_incomes": 7890.099999999999}, {"sum_num_cards": 1184, "name": "Hipermercados", "sum_num_payments": 2662, "sum_incomes": 73658.47000000003}, {"sum_num_cards": 2323, "name": "Salud", "sum_num_payments": 2959, "sum_incomes": 182896.24000000002}, {"sum_num_cards": 897, "name": "Otros servicios", "sum_num_payments": 1185, "sum_incomes": 42803.170000000006}, {"sum_num_cards": 4200, "name": "Comida", "sum_num_payments": 8052, "sum_incomes": 257210.78000000017}, {"sum_num_cards": 4200, "name": "Moda", "sum_num_payments": 8052, "sum_incomes": 257210.78000000017}, {"sum_num_cards": 415, "name": "Contenidos", "sum_num_payments": 622, "sum_incomes": 26553.749999999996}, {"sum_num_cards": 3250, "name": "Bares y restaurantes", "sum_num_payments": 4312, "sum_incomes": 114684.48}, {"sum_num_cards": 2023, "name": "Salud y belleza", "sum_num_payments": 2349, "sum_incomes": 107962.56999999996}, {"sum_num_cards": 11267, "name": "Transporte", "sum_num_payments": 14571, "sum_incomes": 555053.0700000004}, {"sum_num_cards": 393, "name": "Vehículos", "sum_num_payments": 426, "sum_incomes": 86855.26000000001}, {"sum_num_cards": 268, "name": "Hogar", "sum_num_payments": 298, "sum_incomes": 22744.75}]}, {"_id": 28002, "categories": [{"sum_num_cards": 182, "name": "Viajes", "sum_num_payments": 200, "sum_incomes": 64829.740000000005}, {"sum_num_cards": 17439, "name": "Transporte", "sum_num_payments": 22772, "sum_incomes": 1014888.7999999999}, {"sum_num_cards": 20073, "name": "Otros servicios", "sum_num_payments": 26441, "sum_incomes": 693795.0099999998}, {"sum_num_cards": 716, "name": "Hoteles", "sum_num_payments": 867, "sum_incomes": 63949.08999999998}, {"sum_num_cards": 1173, "name": "Deportes y juguetes", "sum_num_payments": 1300, "sum_incomes": 91306.95999999996}, {"sum_num_cards": 2210, "name": "Hogar", "sum_num_payments": 2505, "sum_incomes": 210817.84000000014}, {"sum_num_cards": 10449, "name": "Salud", "sum_num_payments": 14120, "sum_incomes": 1119543.3199999996}, {"sum_num_cards": 1765, "name": "Tecnología", "sum_num_payments": 1965, "sum_incomes": 163084.27000000005}, {"sum_num_cards": 10444, "name": "Hipermercados", "sum_num_payments": 22518, "sum_incomes": 693831.6500000003}, {"sum_num_cards": 14621, "name": "Comida", "sum_num_payments": 34199, "sum_incomes": 1041114.3400000002}, {"sum_num_cards": 14621, "name": "Moda", "sum_num_payments": 34199, "sum_incomes": 1041114.3400000002}, {"sum_num_cards": 7888, "name": "Salud y belleza", "sum_num_payments": 10460, "sum_incomes": 497544.4500000003}, {"sum_num_cards": 13, "name": "Ocio", "sum_num_payments": 16, "sum_incomes": 1971.47}, {"sum_num_cards": 19164, "name": "Bares y restaurantes", "sum_num_payments": 33648, "sum_incomes": 1281768.8499999994}, {"sum_num_cards": 1088, "name": "Contenidos", "sum_num_payments": 1256, "sum_incomes": 37890.18}, {"sum_num_cards": 1466, "name": "Vehículos", "sum_num_payments": 1555, "sum_incomes": 361477.02999999985}]}, {"_id": 28041, "categories": [{"sum_num_cards": 2351, "name": "Salud y belleza", "sum_num_payments": 2833, "sum_incomes": 125737.18}, {"sum_num_cards": 27, "name": "Viajes", "sum_num_payments": 30, "sum_incomes": 6007.02}, {"sum_num_cards": 202, "name": "Deportes y juguetes", "sum_num_payments": 215, "sum_incomes": 9302.83}, {"sum_num_cards": 13467, "name": "Transporte", "sum_num_payments": 19203, "sum_incomes": 766763.5800000012}, {"sum_num_cards": 1659, "name": "Otros servicios", "sum_num_payments": 2275, "sum_incomes": 98538.78000000001}, {"sum_num_cards": 144, "name": "Hogar", "sum_num_payments": 152, "sum_incomes": 10466.630000000001}, {"sum_num_cards": 14033, "name": "Comida", "sum_num_payments": 28053, "sum_incomes": 1090744.4399999997}, {"sum_num_cards": 14033, "name": "Moda", "sum_num_payments": 28053, "sum_incomes": 1090744.4399999997}, {"sum_num_cards": 694, "name": "Tecnología", "sum_num_payments": 751, "sum_incomes": 73979.15000000001}, {"sum_num_cards": 18092, "name": "Hipermercados", "sum_num_payments": 30140, "sum_incomes": 1665275.4300000016}, {"sum_num_cards": 139, "name": "Contenidos", "sum_num_payments": 147, "sum_incomes": 3045.89}, {"sum_num_cards": 3808, "name": "Bares y restaurantes", "sum_num_payments": 5216, "sum_incomes": 114327.09999999999}, {"sum_num_cards": 1566, "name": "Vehículos", "sum_num_payments": 1708, "sum_incomes": 216197.94999999984}, {"sum_num_cards": 4044, "name": "Salud", "sum_num_payments": 5322, "sum_incomes": 239593.23}]}, {"_id": 28025, "categories": [{"sum_num_cards": 3535, "name": "Salud y belleza", "sum_num_payments": 4114, "sum_incomes": 158151.78999999998}, {"sum_num_cards": 749, "name": "Tecnología", "sum_num_payments": 820, "sum_incomes": 84482.41000000002}, {"sum_num_cards": 7477, "name": "Transporte", "sum_num_payments": 9223, "sum_incomes": 314140.54999999993}, {"sum_num_cards": 950, "name": "Hogar", "sum_num_payments": 1079, "sum_incomes": 84155.55000000003}, {"sum_num_cards": 2157, "name": "Otros servicios", "sum_num_payments": 2603, "sum_incomes": 137200.6000000001}, {"sum_num_cards": 37, "name": "Viajes", "sum_num_payments": 40, "sum_incomes": 19434.55}, {"sum_num_cards": 177, "name": "Contenidos", "sum_num_payments": 251, "sum_incomes": 8878.73}, {"sum_num_cards": 2044, "name": "Deportes y juguetes", "sum_num_payments": 2195, "sum_incomes": 101126.96000000004}, {"sum_num_cards": 21424, "name": "Moda", "sum_num_payments": 43109, "sum_incomes": 1634874.7599999986}, {"sum_num_cards": 21424, "name": "Comida", "sum_num_payments": 43109, "sum_incomes": 1634874.7599999986}, {"sum_num_cards": 4874, "name": "Bares y restaurantes", "sum_num_payments": 6397, "sum_incomes": 175233.68000000002}, {"sum_num_cards": 9832, "name": "Hipermercados", "sum_num_payments": 16614, "sum_incomes": 666120.7999999997}, {"sum_num_cards": 3929, "name": "Salud", "sum_num_payments": 4902, "sum_incomes": 357580.7099999998}, {"sum_num_cards": 725, "name": "Vehículos", "sum_num_payments": 782, "sum_incomes": 153392.56999999998}]}, {"_id": 28034, "categories": [{"sum_num_cards": 4449, "name": "Salud y belleza", "sum_num_payments": 5678, "sum_incomes": 377049.4700000002}, {"sum_num_cards": 17457, "name": "Transporte", "sum_num_payments": 23438, "sum_incomes": 912100.6500000007}, {"sum_num_cards": 664, "name": "Tecnología", "sum_num_payments": 705, "sum_incomes": 37679.540000000015}, {"sum_num_cards": 981, "name": "Deportes y juguetes", "sum_num_payments": 1143, "sum_incomes": 108503.13000000003}, {"sum_num_cards": 2539, "name": "Otros servicios", "sum_num_payments": 3274, "sum_incomes": 155013.63}, {"sum_num_cards": 457, "name": "Hogar", "sum_num_payments": 506, "sum_incomes": 59041.99}, {"sum_num_cards": 22534, "name": "Moda", "sum_num_payments": 46872, "sum_incomes": 2143263.360000003}, {"sum_num_cards": 22534, "name": "Comida", "sum_num_payments": 46872, "sum_incomes": 2143263.360000003}, {"sum_num_cards": 7197, "name": "Hipermercados", "sum_num_payments": 14448, "sum_incomes": 550115.2999999998}, {"sum_num_cards": 24, "name": "Viajes", "sum_num_payments": 26, "sum_incomes": 9927.289999999999}, {"sum_num_cards": 101, "name": "Hoteles", "sum_num_payments": 121, "sum_incomes": 37076.47999999999}, {"sum_num_cards": 10431, "name": "Bares y restaurantes", "sum_num_payments": 14652, "sum_incomes": 719485.2499999998}, {"sum_num_cards": 1721, "name": "Contenidos", "sum_num_payments": 1984, "sum_incomes": 82027.14000000003}, {"sum_num_cards": 1521, "name": "Vehículos", "sum_num_payments": 1616, "sum_incomes": 591870.5400000003}, {"sum_num_cards": 8680, "name": "Salud", "sum_num_payments": 11846, "sum_incomes": 1016494.81}]}, {"_id": 28008, "categories": [{"sum_num_cards": 8322, "name": "Salud y belleza", "sum_num_payments": 10084, "sum_incomes": 461275.35000000015}, {"sum_num_cards": 53, "name": "Viajes", "sum_num_payments": 56, "sum_incomes": 30762.37}, {"sum_num_cards": 5313, "name": "Transporte", "sum_num_payments": 7017, "sum_incomes": 324122.95000000007}, {"sum_num_cards": 2723, "name": "Tecnología", "sum_num_payments": 2983, "sum_incomes": 208034.58999999997}, {"sum_num_cards": 1717, "name": "Deportes y juguetes", "sum_num_payments": 1851, "sum_incomes": 113341.32999999999}, {"sum_num_cards": 4231, "name": "Otros servicios", "sum_num_payments": 4782, "sum_incomes": 206339.10000000006}, {"sum_num_cards": 88, "name": "Hoteles", "sum_num_payments": 131, "sum_incomes": 12529.449999999999}, {"sum_num_cards": 24706, "name": "Hipermercados", "sum_num_payments": 44963, "sum_incomes": 2291255.970000002}, {"sum_num_cards": 2414, "name": "Hogar", "sum_num_payments": 2806, "sum_incomes": 134376.88999999998}, {"sum_num_cards": 6203, "name": "Comida", "sum_num_payments": 12918, "sum_incomes": 475346.18}, {"sum_num_cards": 3055, "name": "Ocio", "sum_num_payments": 3540, "sum_incomes": 99471.0700000001}, {"sum_num_cards": 24867, "name": "Bares y restaurantes", "sum_num_payments": 48184, "sum_incomes": 1063159.6899999997}, {"sum_num_cards": 6359, "name": "Salud", "sum_num_payments": 8153, "sum_incomes": 596317.9499999995}, {"sum_num_cards": 6203, "name": "Moda", "sum_num_payments": 12918, "sum_incomes": 475346.18}, {"sum_num_cards": 168, "name": "Vehículos", "sum_num_payments": 181, "sum_incomes": 47362.369999999995}, {"sum_num_cards": 2115, "name": "Contenidos", "sum_num_payments": 2334, "sum_incomes": 87253.31999999999}]}, {"_id": 28012, "categories": [{"sum_num_cards": 17, "name": "Viajes", "sum_num_payments": 19, "sum_incomes": 9022.24}, {"sum_num_cards": 17683, "name": "Transporte", "sum_num_payments": 23955, "sum_incomes": 903372.3800000005}, {"sum_num_cards": 5579, "name": "Hipermercados", "sum_num_payments": 10825, "sum_incomes": 303964.60000000015}, {"sum_num_cards": 1134, "name": "Hoteles", "sum_num_payments": 1373, "sum_incomes": 158527.91999999998}, {"sum_num_cards": 2842, "name": "Ocio", "sum_num_payments": 3272, "sum_incomes": 116782.34999999998}, {"sum_num_cards": 5198, "name": "Otros servicios", "sum_num_payments": 6345, "sum_incomes": 314737.6300000001}, {"sum_num_cards": 1332, "name": "Tecnología", "sum_num_payments": 1475, "sum_incomes": 146207.4200000001}, {"sum_num_cards": 8812, "name": "Comida", "sum_num_payments": 15104, "sum_incomes": 442030.70000000036}, {"sum_num_cards": 8812, "name": "Moda", "sum_num_payments": 15104, "sum_incomes": 442030.70000000036}, {"sum_num_cards": 1325, "name": "Deportes y juguetes", "sum_num_payments": 1432, "sum_incomes": 86427.97999999997}, {"sum_num_cards": 2642, "name": "Salud y belleza", "sum_num_payments": 3147, "sum_incomes": 180630.28000000003}, {"sum_num_cards": 22227, "name": "Bares y restaurantes", "sum_num_payments": 29040, "sum_incomes": 852168.3700000001}, {"sum_num_cards": 5942, "name": "Salud", "sum_num_payments": 7393, "sum_incomes": 422915.3600000003}, {"sum_num_cards": 2899, "name": "Contenidos", "sum_num_payments": 3191, "sum_incomes": 113938.72999999997}, {"sum_num_cards": 1156, "name": "Vehículos", "sum_num_payments": 1290, "sum_incomes": 160368.36000000007}, {"sum_num_cards": 1153, "name": "Hogar", "sum_num_payments": 1507, "sum_incomes": 115128.23}]}, {"_id": 28043, "categories": [{"sum_num_cards": 8390, "name": "Salud y belleza", "sum_num_payments": 10487, "sum_incomes": 482999.7000000002}, {"sum_num_cards": 18057, "name": "Transporte", "sum_num_payments": 24153, "sum_incomes": 1012424.7699999996}, {"sum_num_cards": 1657, "name": "Tecnología", "sum_num_payments": 1838, "sum_incomes": 135419.84999999998}, {"sum_num_cards": 2522, "name": "Deportes y juguetes", "sum_num_payments": 2795, "sum_incomes": 147650.24}, {"sum_num_cards": 3186, "name": "Ocio", "sum_num_payments": 3921, "sum_incomes": 135532.95}, {"sum_num_cards": 27524, "name": "Hipermercados", "sum_num_payments": 50723, "sum_incomes": 2616221.620000001}, {"sum_num_cards": 2190, "name": "Hogar", "sum_num_payments": 2553, "sum_incomes": 142250.93}, {"sum_num_cards": 9622, "name": "Salud", "sum_num_payments": 12665, "sum_incomes": 824168.1999999994}, {"sum_num_cards": 12344, "name": "Comida", "sum_num_payments": 26432, "sum_incomes": 949175.3900000004}, {"sum_num_cards": 12344, "name": "Moda", "sum_num_payments": 26432, "sum_incomes": 949175.3900000004}, {"sum_num_cards": 847, "name": "Contenidos", "sum_num_payments": 936, "sum_incomes": 38321.520000000004}, {"sum_num_cards": 226, "name": "Hoteles", "sum_num_payments": 311, "sum_incomes": 23295.769999999997}, {"sum_num_cards": 4480, "name": "Otros servicios", "sum_num_payments": 5575, "sum_incomes": 261001.6899999999}, {"sum_num_cards": 64, "name": "Viajes", "sum_num_payments": 75, "sum_incomes": 30844.869999999995}, {"sum_num_cards": 645, "name": "Vehículos", "sum_num_payments": 697, "sum_incomes": 159219.18999999994}, {"sum_num_cards": 25107, "name": "Bares y restaurantes", "sum_num_payments": 37217, "sum_incomes": 1254388.38}]}, {"_id": 28031, "categories": [{"sum_num_cards": 3520, "name": "Salud y belleza", "sum_num_payments": 4054, "sum_incomes": 140774.9699999999}, {"sum_num_cards": 35, "name": "Viajes", "sum_num_payments": 37, "sum_incomes": 17624.35}, {"sum_num_cards": 25363, "name": "Transporte", "sum_num_payments": 40685, "sum_incomes": 1773345.9799999993}, {"sum_num_cards": 1805, "name": "Deportes y juguetes", "sum_num_payments": 1942, "sum_incomes": 63809.680000000015}, {"sum_num_cards": 2277, "name": "Otros servicios", "sum_num_payments": 3069, "sum_incomes": 155840.31000000006}, {"sum_num_cards": 370, "name": "Hogar", "sum_num_payments": 429, "sum_incomes": 32543.469999999998}, {"sum_num_cards": 680, "name": "Tecnología", "sum_num_payments": 749, "sum_incomes": 72950.5}, {"sum_num_cards": 180, "name": "Contenidos", "sum_num_payments": 210, "sum_incomes": 6432.169999999999}, {"sum_num_cards": 12278, "name": "Comida", "sum_num_payments": 28226, "sum_incomes": 1034153.4100000004}, {"sum_num_cards": 4133, "name": "Salud", "sum_num_payments": 5417, "sum_incomes": 219893.2600000001}, {"sum_num_cards": 1223, "name": "Vehículos", "sum_num_payments": 1344, "sum_incomes": 231788.59999999992}, {"sum_num_cards": 12278, "name": "Moda", "sum_num_payments": 28226, "sum_incomes": 1034153.4100000004}, {"sum_num_cards": 8243, "name": "Bares y restaurantes", "sum_num_payments": 13399, "sum_incomes": 268725.86000000016}]}, {"_id": 28046, "categories": [{"sum_num_cards": 3136, "name": "Salud y belleza", "sum_num_payments": 3795, "sum_incomes": 185237.16000000006}, {"sum_num_cards": 8349, "name": "Tecnología", "sum_num_payments": 10226, "sum_incomes": 761858.7999999999}, {"sum_num_cards": 1267, "name": "Deportes y juguetes", "sum_num_payments": 1391, "sum_incomes": 94608.85999999994}, {"sum_num_cards": 1044, "name": "Otros servicios", "sum_num_payments": 1189, "sum_incomes": 150344.7600000001}, {"sum_num_cards": 15239, "name": "Transporte", "sum_num_payments": 18613, "sum_incomes": 712910.0699999994}, {"sum_num_cards": 1147, "name": "Hoteles", "sum_num_payments": 1484, "sum_incomes": 222872.61999999997}, {"sum_num_cards": 252, "name": "Comida", "sum_num_payments": 290, "sum_incomes": 12547.710000000003}, {"sum_num_cards": 91, "name": "Viajes", "sum_num_payments": 1128, "sum_incomes": 60254.08}, {"sum_num_cards": 678, "name": "Contenidos", "sum_num_payments": 736, "sum_incomes": 24213.08000000002}, {"sum_num_cards": 5692, "name": "Salud", "sum_num_payments": 7001, "sum_incomes": 399269.40000000014}, {"sum_num_cards": 19360, "name": "Bares y restaurantes", "sum_num_payments": 32376, "sum_incomes": 1110099.8499999982}, {"sum_num_cards": 111, "name": "Vehículos", "sum_num_payments": 118, "sum_incomes": 46673.2}, {"sum_num_cards": 1531, "name": "Hogar", "sum_num_payments": 1725, "sum_incomes": 159967.16999999987}, {"sum_num_cards": 252, "name": "Moda", "sum_num_payments": 290, "sum_incomes": 12547.710000000003}]}, {"_id": 28047, "categories": [{"sum_num_cards": 1962, "name": "Salud y belleza", "sum_num_payments": 2403, "sum_incomes": 94230.92999999995}, {"sum_num_cards": 688, "name": "Tecnología", "sum_num_payments": 732, "sum_incomes": 72534.28000000003}, {"sum_num_cards": 1347, "name": "Otros servicios", "sum_num_payments": 1866, "sum_incomes": 98410.05999999998}, {"sum_num_cards": 5863, "name": "Transporte", "sum_num_payments": 7663, "sum_incomes": 231119.00000000003}, {"sum_num_cards": 525, "name": "Deportes y juguetes", "sum_num_payments": 554, "sum_incomes": 22290.019999999997}, {"sum_num_cards": 448, "name": "Hogar", "sum_num_payments": 501, "sum_incomes": 46819.64}, {"sum_num_cards": 2950, "name": "Salud", "sum_num_payments": 3739, "sum_incomes": 191772.9800000001}, {"sum_num_cards": 13339, "name": "Moda", "sum_num_payments": 26144, "sum_incomes": 1142242.3299999994}, {"sum_num_cards": 25, "name": "Viajes", "sum_num_payments": 28, "sum_incomes": 15599.84}, {"sum_num_cards": 53, "name": "Contenidos", "sum_num_payments": 54, "sum_incomes": 1444.12}, {"sum_num_cards": 2021, "name": "Bares y restaurantes", "sum_num_payments": 2637, "sum_incomes": 134671.3099999999}, {"sum_num_cards": 329, "name": "Vehículos", "sum_num_payments": 357, "sum_incomes": 73668.42}, {"sum_num_cards": 13339, "name": "Comida", "sum_num_payments": 26144, "sum_incomes": 1142242.3299999994}]}, {"_id": 28014, "categories": [{"sum_num_cards": 59, "name": "Viajes", "sum_num_payments": 73, "sum_incomes": 19400.75}, {"sum_num_cards": 104, "name": "Tecnología", "sum_num_payments": 118, "sum_incomes": 12216.589999999995}, {"sum_num_cards": 1597, "name": "Ocio", "sum_num_payments": 1744, "sum_incomes": 76301.53999999998}, {"sum_num_cards": 2973, "name": "Otros servicios", "sum_num_payments": 3621, "sum_incomes": 220442.76000000007}, {"sum_num_cards": 2207, "name": "Salud", "sum_num_payments": 2719, "sum_incomes": 197428.40999999992}, {"sum_num_cards": 47, "name": "Deportes y juguetes", "sum_num_payments": 58, "sum_incomes": 4810.239999999999}, {"sum_num_cards": 5197, "name": "Moda", "sum_num_payments": 7394, "sum_incomes": 267061.37}, {"sum_num_cards": 2686, "name": "Salud y belleza", "sum_num_payments": 3104, "sum_incomes": 158398.72999999986}, {"sum_num_cards": 12391, "name": "Transporte", "sum_num_payments": 15839, "sum_incomes": 289494.3399999999}, {"sum_num_cards": 5197, "name": "Comida", "sum_num_payments": 7394, "sum_incomes": 267061.37}, {"sum_num_cards": 22940, "name": "Bares y restaurantes", "sum_num_payments": 70186, "sum_incomes": 1437186.41}, {"sum_num_cards": 827, "name": "Hoteles", "sum_num_payments": 1000, "sum_incomes": 163808.44999999998}, {"sum_num_cards": 170, "name": "Hogar", "sum_num_payments": 182, "sum_incomes": 12447.8}, {"sum_num_cards": 908, "name": "Contenidos", "sum_num_payments": 991, "sum_incomes": 37690.28000000001}, {"sum_num_cards": 77, "name": "Vehículos", "sum_num_payments": 88, "sum_incomes": 15173.649999999998}]}, {"_id": 28005, "categories": [{"sum_num_cards": 5999, "name": "Salud y belleza", "sum_num_payments": 7524, "sum_incomes": 319195.74000000017}, {"sum_num_cards": 47, "name": "Viajes", "sum_num_payments": 51, "sum_incomes": 27575.73}, {"sum_num_cards": 11454, "name": "Transporte", "sum_num_payments": 14488, "sum_incomes": 450281.0700000001}, {"sum_num_cards": 989, "name": "Tecnología", "sum_num_payments": 1110, "sum_incomes": 158627.40999999997}, {"sum_num_cards": 234, "name": "Hoteles", "sum_num_payments": 262, "sum_incomes": 26326.64999999999}, {"sum_num_cards": 1774, "name": "Hogar", "sum_num_payments": 1964, "sum_incomes": 142876.52}, {"sum_num_cards": 7151, "name": "Salud", "sum_num_payments": 9455, "sum_incomes": 484518.09000000026}, {"sum_num_cards": 8378, "name": "Hipermercados", "sum_num_payments": 15554, "sum_incomes": 479924.57999999984}, {"sum_num_cards": 2487, "name": "Contenidos", "sum_num_payments": 2811, "sum_incomes": 105737.23000000001}, {"sum_num_cards": 19721, "name": "Moda", "sum_num_payments": 45389, "sum_incomes": 1782436.2800000005}, {"sum_num_cards": 19721, "name": "Comida", "sum_num_payments": 45389, "sum_incomes": 1782436.2800000005}, {"sum_num_cards": 262, "name": "Ocio", "sum_num_payments": 284, "sum_incomes": 42077.2}, {"sum_num_cards": 18568, "name": "Bares y restaurantes", "sum_num_payments": 25420, "sum_incomes": 1139605.0999999996}, {"sum_num_cards": 1730, "name": "Deportes y juguetes", "sum_num_payments": 1909, "sum_incomes": 179357.98999999996}, {"sum_num_cards": 15171, "name": "Otros servicios", "sum_num_payments": 18309, "sum_incomes": 1028910.6399999992}, {"sum_num_cards": 380, "name": "Vehículos", "sum_num_payments": 400, "sum_incomes": 98741.40000000002}]}, {"_id": 28016, "categories": [{"sum_num_cards": 5516, "name": "Salud y belleza", "sum_num_payments": 7346, "sum_incomes": 492864.2400000005}, {"sum_num_cards": 19910, "name": "Transporte", "sum_num_payments": 26114, "sum_incomes": 1141796.4300000002}, {"sum_num_cards": 712, "name": "Tecnología", "sum_num_payments": 784, "sum_incomes": 65361.72}, {"sum_num_cards": 3476, "name": "Otros servicios", "sum_num_payments": 4314, "sum_incomes": 230378.42}, {"sum_num_cards": 26447, "name": "Hipermercados", "sum_num_payments": 57954, "sum_incomes": 2764858.490000001}, {"sum_num_cards": 6073, "name": "Comida", "sum_num_payments": 11897, "sum_incomes": 618112.8800000002}, {"sum_num_cards": 6073, "name": "Moda", "sum_num_payments": 11897, "sum_incomes": 618112.8800000002}, {"sum_num_cards": 1026, "name": "Hogar", "sum_num_payments": 1148, "sum_incomes": 84111.94999999997}, {"sum_num_cards": 1174, "name": "Deportes y juguetes", "sum_num_payments": 1304, "sum_incomes": 70984.06999999998}, {"sum_num_cards": 257, "name": "Contenidos", "sum_num_payments": 273, "sum_incomes": 11273.769999999999}, {"sum_num_cards": 16221, "name": "Bares y restaurantes", "sum_num_payments": 24290, "sum_incomes": 1037120.5200000003}, {"sum_num_cards": 104, "name": "Viajes", "sum_num_payments": 135, "sum_incomes": 53579.67999999999}, {"sum_num_cards": 7192, "name": "Salud", "sum_num_payments": 9489, "sum_incomes": 591746.0000000003}, {"sum_num_cards": 410, "name": "Vehículos", "sum_num_payments": 433, "sum_incomes": 175554.53}]}, {"_id": 28049, "categories": [{"sum_num_cards": 4203, "name": "Transporte", "sum_num_payments": 5318, "sum_incomes": 235310.40999999992}, {"sum_num_cards": 607, "name": "Otros servicios", "sum_num_payments": 725, "sum_incomes": 20349.86}, {"sum_num_cards": 738, "name": "Salud", "sum_num_payments": 919, "sum_incomes": 29142.66000000001}, {"sum_num_cards": 246, "name": "Deportes y juguetes", "sum_num_payments": 290, "sum_incomes": 22681.19}, {"sum_num_cards": 849, "name": "Salud y belleza", "sum_num_payments": 977, "sum_incomes": 37083.000000000015}, {"sum_num_cards": 5728, "name": "Bares y restaurantes", "sum_num_payments": 7823, "sum_incomes": 224240.2299999998}, {"sum_num_cards": 98, "name": "Contenidos", "sum_num_payments": 116, "sum_incomes": 2722.06}]}, {"_id": 28050, "categories": [{"sum_num_cards": 3323, "name": "Salud y belleza", "sum_num_payments": 3846, "sum_incomes": 189480.55999999997}, {"sum_num_cards": 602, "name": "Viajes", "sum_num_payments": 776, "sum_incomes": 226712.01}, {"sum_num_cards": 12847, "name": "Transporte", "sum_num_payments": 18270, "sum_incomes": 739941.8300000005}, {"sum_num_cards": 193, "name": "Tecnología", "sum_num_payments": 213, "sum_incomes": 20943.040000000005}, {"sum_num_cards": 9, "name": "Deportes y juguetes", "sum_num_payments": 10, "sum_incomes": 801.4}, {"sum_num_cards": 2695, "name": "Otros servicios", "sum_num_payments": 4024, "sum_incomes": 155287.12000000008}, {"sum_num_cards": 40662, "name": "Hipermercados", "sum_num_payments": 81528, "sum_incomes": 4936092.890000008}, {"sum_num_cards": 1776, "name": "Hogar", "sum_num_payments": 2045, "sum_incomes": 126882.23999999995}, {"sum_num_cards": 11565, "name": "Salud", "sum_num_payments": 16186, "sum_incomes": 747613.5200000007}, {"sum_num_cards": 118, "name": "Hoteles", "sum_num_payments": 172, "sum_incomes": 14314.820000000002}, {"sum_num_cards": 13268, "name": "Comida", "sum_num_payments": 28398, "sum_incomes": 1056627.3199999996}, {"sum_num_cards": 320, "name": "Contenidos", "sum_num_payments": 365, "sum_incomes": 15722.98}, {"sum_num_cards": 13268, "name": "Moda", "sum_num_payments": 28398, "sum_incomes": 1056627.3199999996}, {"sum_num_cards": 24810, "name": "Bares y restaurantes", "sum_num_payments": 53974, "sum_incomes": 1275333.9399999995}, {"sum_num_cards": 1095, "name": "Vehículos", "sum_num_payments": 1182, "sum_incomes": 342226.55000000005}]}, {"_id": 28051, "categories": [{"sum_num_cards": 5014, "name": "Salud y belleza", "sum_num_payments": 5557, "sum_incomes": 215710.93000000005}, {"sum_num_cards": 16218, "name": "Transporte", "sum_num_payments": 24663, "sum_incomes": 1070369.4499999993}, {"sum_num_cards": 7606, "name": "Otros servicios", "sum_num_payments": 8704, "sum_incomes": 204958.94999999998}, {"sum_num_cards": 35399, "name": "Hogar", "sum_num_payments": 43375, "sum_incomes": 3034664.149999999}, {"sum_num_cards": 3539, "name": "Deportes y juguetes", "sum_num_payments": 3918, "sum_incomes": 156097.48000000004}, {"sum_num_cards": 3481, "name": "Salud", "sum_num_payments": 4484, "sum_incomes": 132411.99000000005}, {"sum_num_cards": 8056, "name": "Tecnología", "sum_num_payments": 9478, "sum_incomes": 523632.5999999998}, {"sum_num_cards": 15420, "name": "Moda", "sum_num_payments": 32707, "sum_incomes": 1183651.7499999995}, {"sum_num_cards": 9936, "name": "Bares y restaurantes", "sum_num_payments": 11699, "sum_incomes": 310211.92999999993}, {"sum_num_cards": 10, "name": "Vehículos", "sum_num_payments": 11, "sum_incomes": 2077.3199999999997}, {"sum_num_cards": 15420, "name": "Comida", "sum_num_payments": 32707, "sum_incomes": 1183651.7499999995}]}, {"_id": 28054, "categories": [{"sum_num_cards": 3753, "name": "Salud y belleza", "sum_num_payments": 4257, "sum_incomes": 165000.36999999994}, {"sum_num_cards": 370, "name": "Otros servicios", "sum_num_payments": 415, "sum_incomes": 19188.400000000005}, {"sum_num_cards": 6612, "name": "Deportes y juguetes", "sum_num_payments": 7468, "sum_incomes": 297212.96999999986}, {"sum_num_cards": 2205, "name": "Hogar", "sum_num_payments": 2547, "sum_incomes": 76671.5}, {"sum_num_cards": 3160, "name": "Salud", "sum_num_payments": 4062, "sum_incomes": 148062.05000000016}, {"sum_num_cards": 5707, "name": "Tecnología", "sum_num_payments": 6308, "sum_incomes": 523569.3900000001}, {"sum_num_cards": 26678, "name": "Comida", "sum_num_payments": 46890, "sum_incomes": 2124424.0100000007}, {"sum_num_cards": 26678, "name": "Moda", "sum_num_payments": 46890, "sum_incomes": 2124424.0100000007}, {"sum_num_cards": 209, "name": "Vehículos", "sum_num_payments": 222, "sum_incomes": 53126.39}, {"sum_num_cards": 12736, "name": "Transporte", "sum_num_payments": 16839, "sum_incomes": 718677.4000000003}, {"sum_num_cards": 10426, "name": "Bares y restaurantes", "sum_num_payments": 12717, "sum_incomes": 322675.0799999999}]}];

    var camera, scene, renderer, renderercube, vectorcubo, cubo, geometry, material;
    var objectsControls = [], cameraControls, controls;
    var projector;
    var indexPointer = 0;

    var categorias = [];
    var objects = [];
    var targets = { grupo: [], esfera: [], helice: [], capa: [] };
    var actualTargets;
    var buttons = [];
    init();

    var leapController = new Leap.Controller({optimizeHMD: false});
    leapController.connect();

    setInterval(function(){
      cameraControls.update(leapController.frame());
      controls.update();
      showCursor(leapController.frame());
      TWEEN.update();
      render();
    }, 40);

    buttons.push($("#grupos"));
    buttons.push($("#capas"));
    buttons.push($("#esferas"));
    buttons.push($("#helices"));
    buttons.push($("#enlace"));
    buttons.push($("#fullscreentoggle"));
    buttons.push($("#moredata"));
    /*
     Leap.loop(function(frame){

     cameraControls.update(frame);
     controls.update();
     showCursor(frame);
     TWEEN.update();
     render();
     })
     */

    function init() {

      camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 200000 );
      camera.position.z = 5000;

      controls = new THREE.TrackballControls( camera );

      controls.rotateSpeed = 0.2;
      controls.zoomSpeed = 0.2;
      controls.panSpeed = 0.2;
      //controls.noZoom = false;
      //controls.noPan = false;
      //controls.staticMoving = true;
      //controls.dynamicDampingFactor = 0.3;
      ////controls.minDistance = 500;
      ////controls.maxDistance = 6000;

      //controls.addEventListener( 'change', render );
      

      cameraControls = new THREE.LeapCameraControls(camera);
      cameraControls.rotateEnabled  = true;
      cameraControls.rotateSpeed    = 1;
      cameraControls.rotateHands    = 1;
      cameraControls.rotateFingers  = [2, 3];

      cameraControls.zoomEnabled    = true;
      cameraControls.zoomSpeed      = 1;
      cameraControls.zoomHands      = 2;
      cameraControls.zoomFingers    = [6, 10];

      cameraControls.panEnabled     = true;
      cameraControls.panSpeed       = 1;
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

      // Background
      //geometry = new THREE.OctahedronGeometry( 120000,6 );
      //
      //var Textura = new THREE.ImageUtils.loadTexture("textures/text3.jpg"); //carga de textura
      //material = new THREE.MeshLambertMaterial({ map:Textura, side:THREE.DoubleSide }); //aplicacion de textura como material
      ////material = new THREE.MeshLambertMaterial( { color: 0xAEB404 } );
      //
      //cubo = new THREE.Mesh( geometry,material );
      //vectorcubo = new THREE.Vector3();
      //
      //cubo.position.x = 110;
      //cubo.position.y = 0;
      //cubo.position.z = 110;
      //
      ////object.rotation.y = (0.36*i);
      //
      //vectorcubo.x = cubo.position.x * 2;
      //vectorcubo.y = cubo.position.y;
      //vectorcubo.z = cubo.position.z * 2;
      ////object.lookAt(vector);
      //
      //cubo.updateMatrix();
      //cubo.matrixAutoUpdate = false;
      //
      //scene.add( cubo );

      // grupos
      console.log(CPS.length);

      // esfera
      addData(12);



      renderer = new THREE.CSS3DRenderer({});
      renderer.setSize( window.innerWidth, window.innerHeight );
      renderer.domElement.style.position = 'absolute';
      document.getElementById( 'container' ).appendChild( renderer.domElement );

      var container = document.getElementById( 'container' );
      //renderercube = new THREE.WebGLRenderer( {antialias: true} );
      //renderercube.setClearColor( 0x000000 );
      //renderercube.setSize( window.innerWidth, window.innerHeight );
      //renderercube.sortObjects = false;
      //container.appendChild(renderercube.domElement);


      var button = document.getElementById( 'grupos' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.grupo, 2000 );

      }, false );

      var button = document.getElementById( 'esferas' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.esfera, 2000 );

      }, false );

      var button = document.getElementById( 'helices' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.helice, 2000 );

      }, false );

      var button = document.getElementById( 'capas' );
      button.addEventListener( 'click', function ( event ) {

        transformar( targets.capa, 2000 );

      }, false );

      var button = document.getElementById( 'fullscreentoggle' );
      button.addEventListener( 'click', function ( event ) {
        event.preventDefault();
        toggleFullscreen();
      }, false );


      var button = document.getElementById( 'moredata' );
      button.addEventListener( 'click', function ( event ) {
        event.preventDefault();
        addData(12);
      }, false );

      transformar( targets.helice, 2000 );

      window.addEventListener( 'resize', onWindowResize, false );

    }

    function transformar( targets, duration ) {
      actualTargets = targets;
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


    function addData(howMany){
      if(indexPointer + howMany > CPS.length)
        return;
      for ( var i = indexPointer; i < indexPointer + howMany; i += 1 ) {
        var sumaIngresos = 0;
        var sumaGastos = 0;
        var totalTarjetas = 0;

        for (var e = 0; e < CPS[i].categories.length; e++) {
          sumaIngresos += CPS[i].categories[e].sum_incomes;
          sumaGastos += CPS[i].categories[e].sum_num_payments;
          totalTarjetas += CPS[i].categories[e].sum_num_cards;
          categorias[e] = CPS[i].categories[e].name;
        }

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,0.8'+/* + ( Math.random() * 0.5 + 0.25 ) + */')';

        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent ='C.P.: '+CPS[i]._id;
        element.appendChild(symbol);

        var grafico = document.createElement('div');
        grafico.className = 'grafico';
        element.appendChild(grafico);

        var n = 3, // number of layers
            m = CPS[i].categories.length, // number of samples per layer
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
              if(CPS[i].categories.length <= 10)
                return categorias[d];
              else return categorias[d].substring(0, 9);
            })
            .orient("bottom")

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
            .attr("height", 0);

        rect.transition()
            .delay(function(d, i) { return i * 10; })
            .attr("y", function(d) { return y(d.y0 + d.y); })
            .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text(CPS[i]['name']);


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

      var vector = new THREE.Vector3();

      for ( var i = indexPointer, l = indexPointer + howMany; i < l; i ++ ) {

        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();

        object.position.x = 3100 * Math.cos( theta ) * Math.sin( phi );
        object.position.y = 3100 * Math.sin( theta ) * Math.sin( phi );
        object.position.z = 3100 * Math.cos( phi );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.esfera.push( object );

      }
      // helice

      var vector = new THREE.Vector3();

      for ( var i = indexPointer, l = indexPointer + howMany; i < l; i ++ ) {

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

      for ( var i = indexPointer; i < indexPointer + howMany; i ++ ) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 900 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 800 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 2500 - 2000;

        targets.capa.push( object );
      }

      if(actualTargets) {
        transformar(actualTargets, 2000);
      }

      indexPointer += howMany;
    }

    function beautifyNumber(num){
      var aux = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      aux = aux.substring(0, aux.length - 3);
      return aux;
    }

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
      //renderercube.setSize( window.innerWidth, window.innerHeight );

      render();

    }

    function animate() {
      requestAnimationFrame( animate );
      TWEEN.update();
      controls.update();
    }

    function render() {
      renderer.render( scene, camera );
      //renderercube.render( scene, camera );
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
