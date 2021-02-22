db.patient.insertOne({
    fullname : 'gamemanrus',
    phone : '34238fudsofiu2-',
    appointment : [{
        dent_number : '7',
        diagnos : 'omgDIAGNOS!!!!',
        price : 1500,
        date : '21-02-2021',
        time : '17:08',
        id : '3284nfeonwjrp23hjgj;k;lw3n4;l23j4n;2lkjnfnj;ksjffne;wkfj'
    },{
        dent_number : 7,
        diagnos : 'byeeee',
        price : 1500,
        date : '21-02-2021',
        time : '15:08',
        id : 't24lktj42;n4;k3jn42;k3j4n;kn1231n;3k12nj31;23'
    }]
})
db.createCollection('appointment')

db.appointment.insertOne({
    dent_number : 12,
    diagnos : 'test_deagnos',
    price : 1500,
    date : '21-02-2021',
    time : '15:08'
})
db.patient.update(
    { _id: "6032558c50e1a81220c583fe" },
    { $set:
            {
                fullname : "fullname",
                phone : "phone"
            }
    }
)
db.patient.findById({ _id: "6032558c50e1a81220c583fe" })
db.patient.deleteMany({"appointment.dent_number" : {$ne : '12'}})