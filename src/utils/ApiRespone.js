class ApiResponse {
    constructor(statusCode , data , message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success = statusCode < 400 // research about status code from the status code of servers from mdn web docs 
    }
}