class User {
    constructor(user_id, first_name, last_name, address, phone_number, email, password) {
      this.user_id = user_id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.address = address;
      this.phone_number = phone_number;
      this.email = email;
      this.password = password;
    }
  
    // User to JSON
    toJSON() {
      return {
        user_id: this.user_id,
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password,
      };
    }

    // user from JSON
    static from(json) {
        const user = new User(
          json.user_id,
          json.first_name,
          json.last_name,
          json.address,
          json.phone_number,
          json.email,
          json.password
        );
        return user;
      }


}

module.exports = User;