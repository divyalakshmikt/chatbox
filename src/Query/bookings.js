const sql = require("../config/db");

const Bookings = function (Bookings) {
    this.Booking_id = Bookings.id;
    this.ride_id = Bookings.rider_id;
    this.driver_id = Bookings.driver_id;
    this.pickup_location_address  = Bookings.pickup_location_address;
    this.pickup_location_latitude  = Bookings.pickup_location_latitude;
    this.pickup_location_longitude  = Bookings.pickup_location_longitude;
    this.pickup_location_name   = Bookings.pickup_location_name;
    this.pickup_location_url  = Bookings.pickup_location_url
    this.dropoff_location_address  = Bookings.dropoff_location_address
    this.dropoff_location_latitude  = Bookings.dropoff_location_latitude;
    this.dropoff_location_longitude  = Bookings.dropoff_location_longitude;
    this.dropoff_location_name  = Bookings.dropoff_location_name;
    this.dropoff_location_url = Bookings.dropoff_location_url;
    this.amount  = Bookings.amount;
    this.payment_mode  = Bookings.payment_mode;
    this.Status  = Bookings.Status;
    this.riding_status  = Bookings.riding_status;
    this.created_at  = Bookings.created_at;

};


Bookings.getAll = async (query_builder) => {
    const qb = await sql.get_connection();
    try {

        const result_data = await qb.select(query_builder.columns)
            .from('equipment_Bookings eb')
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

Bookings.getOne = async (query_builder, result) => {
    const qb = await sql.get_connection();
    try {

        const result_data = await qb.select(query_builder.columns).where(query_builder.where).get('equipment_Bookings');

        return ({ "status": 200, "response": result_data })


    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}

Bookings.delete = async (query_builder, result) => {
    const qb = await sql.get_connection();
    try {
        // const result_data = await qb.delete('equipment_Bookings', query_builder.where)
        const result_data = await qb.update('equipment_Bookings', query_builder.data, query_builder.where)

        return ({ "status": 200, "response": "Bookings deleted successfully", "info": result_data })

    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}

Bookings.create = async (query_builder, result) => {

    const qb = await sql.get_connection();
    try {

        const insert_data = await qb.returning('id').insert('Bookings', query_builder)
        return ({ "status": 200, "response": "Bookings added successfully", "info": insert_data });


    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}



Bookings.update = async (query_builder, result) => {
    const qb = await sql.get_connection();
    try {

        const result_data = await qb.update('equipment_Bookings', query_builder.data, query_builder.where)
        return ({ "status": 200, "response": "Bookings updated successfully", "info": result_data });
    } catch (err) {
        if (err) {
            return ({ "status": 400, "response": "Bad request", "msg": err });
        }
    } finally {
        qb.release();
    }
}




module.exports = Bookings;