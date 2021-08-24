const initialState = {
    cards:[
        {number1:5877, number2:5421, card_owner:'Mike Smith',date:"11/22", date2:"12/12/2024",current_balance:"$2850.75",income:"$5940",outcome:"$350",holidays:"$140",renovation:"$680",xbox:"$120",shoping:"78%",electronics:"48%",travel:"89%",table1:"$78.5",table2:"$201.0",table3:"$89.5",table4:"$78.5",table5:"$86.5",classColor:"plastik_card1"},

        {number1:5625, number2:3213, card_owner:'Bill Gates',date:"16/24", date2:"23/12/2024",current_balance:"$1150.75",income:"$1640",outcome:"$452",holidays:"$250",renovation:"$230",xbox:"$230",shoping:"53%",electronics:"51%",travel:"56%",table1:"$785.5",table2:"$630.5",table3:"$36.5",table4:"$11.5",table5:"$68.5",classColor:"plastik_card2"},

        {number1:7878, number2:1234, card_owner:'Jeff Bezos',date:"18/22", date2:"11/12/2024",current_balance:"$9850.75",income:"$7878",outcome:"$740",holidays:"$360",renovation:"$560",xbox:"$70",shoping:"45%",electronics:"23%",travel:"74%",table1:"$652.0",table2:"$789.5",table3:"$63.5",table4:"$58.5",table5:"$73.5",classColor:"plastik_card3"},

        {number1:4232, number2:5454, card_owner:'Elon Mask',date:"16/22", date2:"18/12/2024",current_balance:"$3652.75",income:"$9820",outcome:"$520",holidays:"$860",renovation:"$890",xbox:"$195",shoping:"79%",electronics:"43%",travel:"25%",table1:"$89.5",table2:"$20.5",table3:"$89.5",table4:"$88.5",table5:"$37.5",classColor:"plastik_card4"},

        {number1:8956, number2:7203, card_owner:'Stiwe Jobs',date:"03/23", date2:"03/12/2024",current_balance:"$1010.75",income:"$4560",outcome:"$630",holidays:"$350",renovation:"$170",xbox:"$168",shoping:"13%",electronics:"58%",travel:"36%",table1:"$36.5",table2:"$42.0",table3:"$73.5",table4:"$77.5",table5:"$96.5",classColor:"plastik_card5"},

        {number1:4545, number2:7878, card_owner:'Mark Cukerberg',date:"24/23", date2:"08/12/2024",current_balance:"$7750.75",income:"$7470",outcome:"$710",holidays:"$160",renovation:"$450",xbox:"$210",shoping:"61%",electronics:"16%",travel:"12%",table1:"$44.5",table2:"$24.5",table3:"$39.5",table4:"$55.5",table5:"$69.5",classColor:"plastik_card6"},

        {number1:7887, number2:9293, card_owner:'Muhamad Ali Eshonqulov',date:"07/22", date2:"30/12/2024",current_balance:"$5950.75",income:"$8920",outcome:"$850",holidays:"$420",renovation:"$830",xbox:"$160",shoping:"87%",electronics:"43%",travel:"42%",table1:"$23.5",table2:"$12.5",table3:"$38.5",table4:"$44.5",table5:"$14.5",classColor:"plastik_card7"},
        
        {number1:1232, number2:1212, card_owner:'Abdulaziz Sulaymonov',date:"30/24", date2:"29/12/2024",current_balance:"$4550.75",income:"$3010",outcome:"$620",holidays:"$320",renovation:"$280",xbox:"$170",shoping:"92%",electronics:"49%",travel:"51%",table1:"$78.5",table2:"$78.5",table3:"$78.5",table4:"$78.5",table5:"$78.5",classColor:"plastik_card8"}

    ],
    isSidebarShow: true,
    todos: [],
    photos: [],
    posts: [],
    users: [],
    albums: [],
    loading: false,
    error: false
};

export default initialState