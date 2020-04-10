
Smart('#table', class {
	get properties() {
		return {
		dataSource: new Smart.DataAdapter(
			{
				dataSource: GetCustomers(),
				dataFields:
				[
					'firstname: string',
					'Last Name: string',
					'Address: string',
					'Address 2: string',
					'City: string',
					'State: string',
					'Zip Code: string',
					'Email: string',
					'Home Phone: string',
                    'Work Phone: string',
                    'Fax: string',
                    'Comapany: string',
                    'Website: string',
				]
			}),
			columns: [
				'firstname',
				'Last Name ',
				'Address',
				'Address 2',
                'City',
                'State',
                'Zip Code',
                'Email',
                'Home Phone',
                'Alt Phone',
                'Work Phone',
                'Fax',
                'Company',
                'Website',
			]
		}
	}
});

window.onload = function() {
	const table = document.getElementById('table');
	
	table.sortBy('firstname', 'asc');
}

function GetCustomers(){
    const sqlite3 = require('sqlite3').verbose();
    var CustomerFileName = './tansuData.db';

    let CustomerData = new Array();

    let db = new sqlite3.Database(CustomerFileName, (err) => {
        if (err) {
        console.error(err.message);
        }
        console.log('Connected to the customer database.');
    });

    let sql = `SELECT "First Name" firstname,
                        "Last Name"  lastname,
                        "Address"    address1,
                        "Address2"   address2,
                        "City"       city,
                        "ST"         state,
                        "ZIP Code"   zipcode,
                        "Email"      email,
                        "Home Phone" homephone,
                        "Alt Phone"  altphone,
                        "Work Phone" workphone,
                        "Fax"        fax,
                        "Company"    company,
                        "Website"    website
                FROM original_mail_list 
                ORDER BY "Last Name"`;
    
    var CustIter = 0;
    db.all(sql, [], (err,rows) => {
        if(err){
            throw err;
        }
        let CustRow = {};
        CustRow["firstname"] = `${row.firstname}`;
        CustRow["lastname"]  = `${row.lastname}`;
        CustRow["address1"]  = `${row.address1}`;
        CustRow["address2"]  = `${row.address2}`;
        CustRow["city"]      = `${row.city}`;
        CustRow["state"]     = `${row.state}`;
        CustRow["zipcode"]   = `${row.zipcode}`;
        CustRow["email"]     = `${row.email}`;
        CustRow["homephone"] = `${row.homephone}`;
        CustRow["altphone"]  = `${row.alphone}`;
        CustRow["workphone"] = `${row.workphone}`;
        CustRow["fax"]       = `${row.fax}`;
        CustRow["company"]   = `${row.company}`;
        CustRow["website"]   = `${row.website}`;
        CustomerData[CustIter] = CustRow;
        CustIter++;
    });
    db.close();
    return CustomerData;
}