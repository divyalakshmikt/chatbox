const sql = require("../config/db");

const Rider = function (Rider) {
    this.id = Rider.RiderID;
    this.Rider_name = Rider.Rider_name;
    this.Phone = Rider.Phone;
    this.status = Rider.status

};


Rider.getAll = async (query_builder) => {
    const qb = await sql.get_connection();
    try {

        const result_data = await qb.select(query_builder.columns)
            .from('equipment_Rider eb')
            .where({ 'status': [1] })
            .order_by('created_date', 'desc')
            .get()


        return ({ "status": 200, "response": result_data })

    } catch (error) {
        if (error) {
            console.log("---- err ------ :", error)
            return ({ "status": 400, "response": "Bad request", "msg": error });
        }
    } finally {
        qb.release();
    }
}

Rider.getOne = async (query_builder, result) => {
    const qb = await sql.get_connection();
    try {

        const result_data = await qb.select(query_builder.columns).where(query_builder.where).get('Rider');

        return ({ "status": 200, "response": result_data })


    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}

Rider.delete = async (query_builder, result) => {
    const qb = await sql.get_connection();
    try {
        // const result_data = await qb.delete('equipment_Rider', query_builder.where)
        const result_data = await qb.update('equipment_Rider', query_builder.data, query_builder.where)

        return ({ "status": 200, "response": "Rider deleted successfully", "info": result_data })

    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}

Rider.create = async (query_builder, result) => {

    const qb = await sql.get_connection();
    try {

        const insert_data = await qb.returning('id').insert('Rider', query_builder)
        return ({ "status": 200, "response": "Rider added successfully", "info": insert_data });


    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}



Rider.update = async (query_builder, result) => {
    const qb = await sql.get_connection();
    try {

        const result_data = await qb.update('equipment_Rider', query_builder.data, query_builder.where)
        return ({ "status": 200, "response": "Rider updated successfully", "info": result_data });
    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}


// Rider.getEquipmentName = async (query_builder, result) => {
//     const qb = await sql.get_connection();
//     try {

//         let columns = 'id,device_name';

//         const result_data = await qb.select(columns).where(query_builder.where).get('equipment_category');



//         return result_data[0]
//     } catch (err) {
//         if (err) {
//             return ({ "status": 400, "response": "Bad request", "msg": err });
//         }
//     } finally {
//         qb.release();
//     }
// }

module.exports = Rider;