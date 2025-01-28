// Conexión a la base de datos
db = connect("mongodb://localhost:27017/realestate_db");

// Insertar datos en la colección Owner
db.Owner.insertMany([
    {
        _id: "b36f13df-ef24-4c3b-9b9c-c81d082423f2",
        Name: "Alice Johnson",
        Address: "456 Elm St",
        Photo: "base64string",
        Birthday: new Date("1985-05-15")
    },
    {
        _id: "951d62be-bf87-47a7-8213-d6d3fb9c3238",
        Name: "Bob Smith",
        Address: "789 Pine Rd",
        Photo: "base64string",
        Birthday: new Date("1992-07-20")
    }
]);

// Insertar datos en la colección Property
db.Property.insertMany([
    {
        _id: "d42d4fe6-bd3f-41aa-805d-10bc33c00de6",
        Name: "Dream House",
        Address: "123 Dream St",
        Price: 500000,
        CodeInternal: "DH-001",
        Year: 2015,
        OwnerId: "b36f13df-ef24-4c3b-9b9c-c81d082423f2",
        Images: []
    },
    {
        _id: "07897061-5c9a-4fb1-bafc-984b067c38b7",
        Name: "Modern Apartment",
        Address: "456 City Rd",
        Price: 300000,
        CodeInternal: "MA-002",
        Year: 2020,
        OwnerId: "951d62be-bf87-47a7-8213-d6d3fb9c3238",
        Images: [
            {
                _id: "83b537b9-cb81-480c-8459-5221720cd7df",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: false
            },
            {
                _id: "5374ae3a-a0fe-45cc-9ff5-5f70e1c4d2c1",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "f6cf7c3c-2b23-4e97-b6d8-00f6f90eaf66",
                File: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                Enabled: true
            },
            {
                _id: "67805c0b-b658-4996-a86d-cdb4506c6ebc",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                Enabled: true
            }
        ]
    },
    {
        _id: "680c6721-3eb2-44bf-b1a0-9186a1432864",
        Name: "Charming Bungalow",
        Address: "111 Maple Way",
        Price: 350000,
        CodeInternal: "CB-007",
        Year: 2012,
        OwnerId: "ae2e4b1e-e8d7-4d99-a24e-5ecf4df8adfa",
        Images: [
            {
                _id: "17936a6a-8210-4cfa-bc05-c7d7b84fa69d",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "a6f0817d-349f-480b-aa77-aa305c916aef",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "36155cfd-7435-4ba9-942c-71b6e48560a8",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "8d217a81-624b-4bf6-b3d8-5fdfcf3b298e",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "296f954b-c566-4bad-b629-9bb085233372",
        Name: "Lakefront Cabin",
        Address: "999 Lakeside Dr",
        Price: 480000,
        CodeInternal: "LC-008",
        Year: 2010,
        OwnerId: "5a57c41a-7037-4eb9-8de1-69f538c19280",
        Images: [
            {
                _id: "126d2a76-eb94-4314-9791-07742a252ced",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "d533f26d-db56-4fc6-8dc0-ab21094fda69",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "d795cf61-f12e-4bf8-939c-f2352191eb4d",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "837cf164-393a-417b-a52e-df758726bbf5",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "6975e2fa-b62b-4d79-9eb0-44264765aa7c",
        Name: "Urban Loft",
        Address: "22 Skyline Blvd",
        Price: 700000,
        CodeInternal: "UL-009",
        Year: 2021,
        OwnerId: "121387ec-04eb-421d-9b96-c9bd3144766e",
        Images: [
            {
                _id: "60c264e9-2485-48aa-99e6-0863ff2272a9",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "2c8414cd-d5f3-452f-a9c6-bea1b0ab4b2c",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "9bfe9488-13a3-4aa7-9177-a4593d369116",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "bba68a81-6f2c-414f-921c-41fb18fc852a",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "febb6625-bfb9-48c4-8b21-46c89b953e45",
        Name: "Beachside Retreat",
        Address: "10 Oceanview Ave",
        Price: 900000,
        CodeInternal: "BR-010",
        Year: 2022,
        OwnerId: "6f63d551-684f-4de4-86c5-57904e8dfbe3",
        Images: [
            {
                _id: "a81ef79e-a197-4beb-b22f-dc67969e1ce5",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "f90e46be-279c-456e-9199-4970b15541b7",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "bcf86916-390d-4453-bc46-49b9fbdddf15",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "380d824e-b97d-4436-8767-e2fa3325b74b",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "c6c514aa-24db-4a61-93a0-adfb3d27acdf",
        Name: "Mountain Lodge",
        Address: "777 Alpine Rd",
        Price: 550000,
        CodeInternal: "ML-011",
        Year: 2016,
        OwnerId: "0abc79a7-fa52-4cf4-8a95-e4cdfc789c3c",
        Images: [
            {
                _id: "c29a9df0-9551-42ef-8eb6-41d4b827bb0e",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "39750af2-39c9-43ce-a3ad-1175660aa203",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "740608e4-f363-44bc-8f1c-7f55beb6e757",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "855bc08d-0afe-4099-8b82-faa5af682c5b",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "3bf4e01c-943a-42df-bb99-8fa311a346da",
        Name: "Country Estate",
        Address: "456 Countryside Ln",
        Price: 1100000,
        CodeInternal: "CE-012",
        Year: 2003,
        OwnerId: "80d68e22-6dfa-425d-8db1-15c87f0b99b0",
        Images: [
            {
                _id: "3ce48343-3b7b-4dcc-a4b1-3f5622f6f934",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "60149574-1734-4de9-9da9-486363092514",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "dabb9b5d-e8de-4f1c-ade4-76b097059924",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "5d2a2cef-e052-449a-b18a-472a179fa4c1",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "7119ed81-98f5-4dd8-98a4-675f021b7c46",
        Name: "Rustic Barn House",
        Address: "22 Country Rd",
        Price: 280000,
        CodeInternal: "RB-013",
        Year: 2007,
        OwnerId: "47cdf5ea-360f-4843-a9a3-26aa7579d892",
        Images: [
            {
                _id: "421ba259-221c-4af1-9c63-5757db612240",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "4f81fb7a-6c2f-46e6-81e9-a1ffb6e5392c",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "2d65d1ea-0604-4f9f-98a6-c4904e0ef8d6",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "0dc893b1-116f-4071-8461-d5cc0e033ac9",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "0568dd78-af3b-4359-a031-3d17af4871ef",
        Name: "Suburban Home",
        Address: "988 Suburban Dr",
        Price: 400000,
        CodeInternal: "SH-014",
        Year: 2019,
        OwnerId: "f5ce8168-9557-431f-a1de-725b36dac89b",
        Images: [
            {
                _id: "23956bc9-c3e9-4d9a-87f6-684a40caffec",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "d32595f2-a7fd-4cdf-b92c-b18e73755c56",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "ecda360f-4321-4bee-91f4-ff01a1b7bd52",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "980731bd-5647-486d-a57e-7dfcbfffae0f",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "2821bd71-a910-44f0-92e8-f9bd20b283b5",
        Name: "Studio Loft",
        Address: "11 Lofty Ln",
        Price: 180000,
        CodeInternal: "SL-015",
        Year: 2020,
        OwnerId: "c87b3acc-27bd-4d52-9feb-5fa64b79c754",
        Images: [
            {
                _id: "dbb91446-0955-4a1b-a054-5ee07b4a62e3",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "c0174ae6-2246-40da-b460-42d9fe253647",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "052cf744-88aa-4095-a6c4-5d3cbe4ab664",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "d08603c4-4861-4dbc-835f-872758f82249",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "ed762b78-0638-4a60-993a-b60ba40ca7da",
        Name: "Luxury Penthouse",
        Address: "101 Highrise St",
        Price: 1300000,
        CodeInternal: "LP-016",
        Year: 2023,
        OwnerId: "d131fba4-ae8e-4d32-a1ac-4f3c35b1fe48",
        Images: [
            {
                _id: "3ffcc53f-8d52-405d-b91d-155974db8870",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "bee41060-706f-48ab-a7f6-bdf8b7133916",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "52fc4e62-70ef-4d24-a1ee-a78b3a32f14e",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "cb2583fa-58a6-42af-bd25-c2e8390f7746",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "f5bdcaef-28fb-4baf-b201-c842c694231c",
        Name: "Cozy Cottage",
        Address: "55 Cozy Ct",
        Price: 220000,
        CodeInternal: "CC-017",
        Year: 2008,
        OwnerId: "7be65e92-3cf5-48d8-bc50-8cd147e8371c",
        Images: [
            {
                _id: "4d2065c2-f3ed-4ee2-8fab-876c9c5da865",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "5ee32776-6cfa-4ce5-abbe-42157149501f",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "6049c364-6c81-4934-98c2-231486b3f4ed",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "87bb0786-15d5-49da-b638-8b3cfced9f2e",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "5209dbde-ae9b-4745-9f0e-c809fed23c8d",
        Name: "Modern Condo",
        Address: "22 Park Ave",
        Price: 320000,
        CodeInternal: "MC-018",
        Year: 2015,
        OwnerId: "2f009ade-5bb3-4558-9b40-4b0ea0269710",
        Images: [
            {
                _id: "7084351c-efda-4ec4-a87f-5f266ca190bd",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "1c98d62a-1539-4a5b-97c3-8689e7e1fb3b",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "aa85f86f-76f8-42e0-a8e2-a66c64687bf0",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "003ac465-6837-4aac-bce4-37750d5b959f",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "4c7fb5a3-338f-488b-9ee7-6e8b015702b5",
        Name: "Victorian House",
        Address: "789 Old Town Rd",
        Price: 650000,
        CodeInternal: "VH-019",
        Year: 2013,
        OwnerId: "e3aba84e-f708-4b5b-a4f0-8fbd41dce3dc",
        Images: [
            {
                _id: "0293bece-8ebf-45f5-90fc-b07f205ad17e",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "da614f4c-d188-4acd-8360-d24ed3af6872",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "bd7aad90-0d24-4bdc-a3e4-a61c308bdbbc",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "5e99f1b4-248b-4f41-a2b7-77f0a845bfcf",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "191689ac-3856-48d2-aeec-f1461ea9b93d",
        Name: "Duplex Unit",
        Address: "45 Split Rd",
        Price: 210000,
        CodeInternal: "DU-020",
        Year: 2002,
        OwnerId: "c590f1ce-34f1-4c6c-a07a-5dc062fd63f1",
        Images: [
            {
                _id: "635443ec-24d6-4e97-9f59-dabf94700d49",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "0a464568-40de-4892-9876-fc40d2924cea",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "a9e08c57-42fc-42ef-9628-15bce085ff3b",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "cdf854a2-6c6f-4bf1-9449-55ce1cd022c8",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "8468696d-55fc-4ac7-b05e-3adb98bc5d4b",
        Name: "Ranch Home",
        Address: "77 Prairie Path",
        Price: 380000,
        CodeInternal: "RH-021",
        Year: 2010,
        OwnerId: "959128ed-a0ef-47a6-bfb6-7b2a64bffcd3",
        Images: [
            {
                _id: "cf4274fe-59a8-4941-9082-59178c7cfa49",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "86068cb9-70d5-4760-ae3c-cdff785384b3",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "88037320-fa39-48e2-8cd6-94f5c046cdb2",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "7b376fdb-0163-4507-a59b-d37bc7dd86a5",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "d58a28b6-3191-409b-a442-52d3fc81d854",
        Name: "Contemporary Residence",
        Address: "66 Modern Ave",
        Price: 490000,
        CodeInternal: "CR-022",
        Year: 2021,
        OwnerId: "9c5b98c6-cc2b-4787-a03a-f05fab6608e6",
        Images: [
            {
                _id: "0eb47deb-81aa-4bc5-af7e-3f7c1826cd93",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "0f1b75c4-31e3-49b5-9719-cbb34a8106b1",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "1b64609a-4a9b-4a75-b1f7-311d83573bf6",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "9b7d1122-0e99-40e7-9032-307da593b7b8",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "9bb15cfd-c2f0-49af-a686-dc2e547295e9",
        Name: "Historic Mansion",
        Address: "999 Heritage Blvd",
        Price: 1500000,
        CodeInternal: "HM-023",
        Year: 2005,
        OwnerId: "ae88d573-a11d-4b9e-a41c-73954e4f4955",
        Images: [
            {
                _id: "b4df2fe3-0d9c-4a46-8d10-43ec0ba7ce90",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "2e0a1cd2-96e8-4241-aab5-0a2f386f6fae",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "fbf8fcce-31f0-4f3f-a731-8fc35a769255",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "43bfec4d-2d93-4ad4-bb52-4bca418cc917",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "7f3a898c-f460-494a-8cfb-1ef61846029d",
        Name: "Minimalist House",
        Address: "101 Clean St",
        Price: 300000,
        CodeInternal: "MH-024",
        Year: 2018,
        OwnerId: "1af2ba35-55e4-4eaf-9b68-c9e74efdac1d",
        Images: [
            {
                _id: "f5bc4546-bfa0-4216-b417-10e7ff74df6a",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "0f0f2eca-3947-4f91-8f6c-50d47a079689",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "3d1e0b45-888d-49a3-b829-980764fae0b9",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "fda52182-15f1-483c-bd74-9afeddbe04ed",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "48af85c3-8839-4003-ab3b-b1569b373a6c",
        Name: "Brick Bungalow",
        Address: "400 Brick Ln",
        Price: 290000,
        CodeInternal: "BB-025",
        Year: 2000,
        OwnerId: "efb1ef41-7c02-49f5-aa46-2033ecdf64ba",
        Images: [
            {
                _id: "a2cb132b-8715-47bf-acb2-8ddade202496",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "87ec9bbb-7547-4237-8971-3a47158587a0",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "53596db6-8d09-4ebb-90d6-b63cdb58f9bc",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "d1f1b0c4-ec71-4f43-b2d2-25625f8b1256",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "6ca3515b-79ec-41f8-83fc-3e0657257195",
        Name: "High-Rise Condo",
        Address: "100 Skyscraper Way",
        Price: 750000,
        CodeInternal: "HC-026",
        Year: 2022,
        OwnerId: "3b252391-1615-4557-a2cf-53f56e701918",
        Images: [
            {
                _id: "baf2661c-e019-41c2-bd77-a52c481e993a",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "3b8c47c0-a89c-4287-ba69-df537811b8e3",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "bc970c7f-8b08-4b7b-828a-42f9bc6f4fbb",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "6cd0ad77-afaf-4f82-8fe8-c4faf01ce161",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "c097a767-1e14-4a46-bf8f-078512cbb361",
        Name: "Riverfront Townhouse",
        Address: "350 River Rd",
        Price: 540000,
        CodeInternal: "RT-027",
        Year: 2011,
        OwnerId: "44b855af-8b66-4b65-b3a3-4435674c0b2c",
        Images: [
            {
                _id: "ca6ea156-a263-4971-b94f-7001a90d6d0f",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "953cf32a-cd2e-45a3-8ba2-454c90f2ee73",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "c0c57db9-3ca4-4dad-ae44-9843de52d7d6",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "0a3c076b-3e39-475c-a57b-e6421a58bdc6",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "881c79bc-699c-4f4b-9d45-2f8fd1cdb8da",
        Name: "Garden Villa",
        Address: "44 Blossom Ln",
        Price: 880000,
        CodeInternal: "GV-028",
        Year: 2014,
        OwnerId: "4d45f756-4ab6-49d8-b0ff-91ce6ca4dc82",
        Images: [
            {
                _id: "aef7960c-9c24-4c8a-8c58-2180892b9e88",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "e94fdd57-42fe-41b0-a9ee-5b52a50ea9fa",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "3afc8e6a-6621-4a07-9d8c-9502276439c6",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "2ef84f5a-dd8f-4adb-b920-8053040f9414",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "9d7bc2d4-2b79-4a82-b97b-167083645162",
        Name: "Seaside Cottage",
        Address: "12 Shoreline Way",
        Price: 400000,
        CodeInternal: "SC-029",
        Year: 2001,
        OwnerId: "ba9d3751-8100-42fa-b5bc-256823c86628",
        Images: [
            {
                _id: "5bf3d786-01b0-445e-bc12-941c57d9fd98",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "fb97ff3a-b4f9-4e25-9aae-592361bb43ce",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "5260d5ec-c8ce-4d16-9180-683c312fc08b",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "b6670258-2c33-444d-ab17-84e8d0834817",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "d2311d61-5c5d-4c39-8c0d-8c19410cbdb5",
        Name: "Desert Retreat",
        Address: "88 Dune Dr",
        Price: 450000,
        CodeInternal: "DR-030",
        Year: 2009,
        OwnerId: "8eb15ef0-f68c-4b28-b7ab-aa2aff10f4a6",
        Images: [
            {
                _id: "3d91a52c-7000-49f2-9d7c-78780f8dc22d",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "8b95bc2c-28af-43a2-87dd-d93204d6a748",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "6ace95ff-8c8a-4447-b9f9-6a04af7b0d56",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "89371c6e-687f-45d5-a219-2e1b18d53f82",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "184a6975-869a-4cc1-8843-2e25c294e80e",
        Name: "Tudor Cottage",
        Address: "66 Tudor Lane",
        Price: 500000,
        CodeInternal: "TC-031",
        Year: 2006,
        OwnerId: "228939d9-490b-48e4-aac8-ef31a5f0dffe",
        Images: [
            {
                _id: "bcba43cc-a5d6-4dc0-9098-5d3d619d7373",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "f20f1717-1890-4c95-92c9-4dcc6c6477da",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "5a64519f-e6fb-4cdd-8493-efa45c8a5d07",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "6899d849-8c35-4dbd-a78a-b27dcf8ddc2a",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "26ac9483-26ac-4a77-8314-9aeb68cf2f9f",
        Name: "Farmhouse Estate",
        Address: "120 Country Field",
        Price: 600000,
        CodeInternal: "FE-032",
        Year: 2017,
        OwnerId: "e01e1696-8c82-4666-ab04-bb6c5ea77417",
        Images: [
            {
                _id: "19c2e522-8c9c-4aa3-bf94-717fa39580e1",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "87b88c81-08bc-489d-9bd0-b837d879db20",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "ce7e5aa1-2942-4197-b9a7-baeefb516ef8",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "2547826c-1862-4384-bb03-55cd5494136a",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "705eacb3-fb58-4f07-8772-4c4db8c29c58",
        Name: "Downtown Flat",
        Address: "200 City Center",
        Price: 270000,
        CodeInternal: "DF-033",
        Year: 2004,
        OwnerId: "afcd5065-8666-48cc-87a5-106f4a939b03",
        Images: [
            {
                _id: "3f86211d-314c-4816-be8a-fd071c30f138",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "a2067748-e9d6-4c39-9ed5-aba7894d1db9",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "442d1761-c125-455f-9878-7ed2d449d557",
                File: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
                Enabled: true
            },
            {
                _id: "0faf5b8a-78bd-4232-a3a4-43c3c6b08bb7",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "fc80228f-52c8-492b-9715-93f11b243597",
        Name: "Hillside Haven",
        Address: "77 Hillside Terrace",
        Price: 330000,
        CodeInternal: "HH-034",
        Year: 2012,
        OwnerId: "21ddccf9-7641-4a1d-88c0-f13ca3bcf505",
        Images: [
            {
                _id: "505bd6ad-b69a-4ff9-b594-436a22633bab",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            },
            {
                _id: "b182bcd5-aabf-499c-b88f-78a0ef509b4a",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "edb42654-0903-49f5-b34c-8899fcdbfcdf",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "81a6c701-fba6-4f32-8d19-346d9358e45d",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "610d0050-5b87-4bec-8601-4ecd72429c07",
        Name: "City Condo",
        Address: "133 Urban Ave",
        Price: 420000,
        CodeInternal: "CC-035",
        Year: 2013,
        OwnerId: "84b204c3-82ab-4594-be2f-6eb748a69958",
        Images: [
            {
                _id: "49660716-a01e-416b-83a2-4bf501c18f55",
                File: "https://images.pexels.com/photos/1643388/pexels-photo-1643388.jpeg",
                Enabled: true
            },
            {
                _id: "924dc7a8-49c9-4453-99dc-282f8d6b71c5",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "49a687d4-4b3a-4ea9-968e-4031dbb4848d",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "dfdc5227-a336-4f96-b13b-84f7fc2f3bf8",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            }
        ]
    },
    {
        _id: "25a82d32-ec97-452e-aea2-5ec296774fa3",
        Name: "Suburban Villa",
        Address: "2500 North Suburbia",
        Price: 520000,
        CodeInternal: "SV-036",
        Year: 2020,
        OwnerId: "a2ff98d8-60ef-482e-953a-b96ea5c46ced",
        Images: [
            {
                _id: "d82a9f61-f832-49b6-8b2d-217805d22ffa",
                File: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
                Enabled: true
            },
            {
                _id: "0873891e-9548-4acb-820d-b813cf44a67e",
                File: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
                Enabled: true
            },
            {
                _id: "98b4bf99-4fb8-4da1-af06-5d9dcab51a36",
                File: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
                Enabled: true
            },
            {
                _id: "c40c8679-502b-4ae0-ae7c-1affdeac82c1",
                File: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
                Enabled: true
            }
        ]
    }
]
);

// Insertar datos en la colección PropertyTrace
db.PropertyTrace.insertMany([
    {
        _id: "82633fdd-acb7-420b-9094-8d718ef94930",
        DateSale: new Date("2021-05-01"),
        Name: "Initial Sale",
        Value: 500000,
        Tax: 25000,
        PropertyId: "d42d4fe6-bd3f-41aa-805d-10bc33c00de6"
    },
    {
        _id: "627ba884-ad70-42b2-879c-64c0e9c310bf",
        DateSale: new Date("2022-06-15"),
        Name: "Resale",
        Value: 550000,
        Tax: 27500,
        PropertyId: "d42d4fe6-bd3f-41aa-805d-10bc33c00de6"
    }
]);
