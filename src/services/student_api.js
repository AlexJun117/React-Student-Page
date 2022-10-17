
class StudentAPI {

    constructor(httpClient){
        this.studentClient = httpClient
    }

   async getStudentData(){
        try{
            // const response = await this.studentClient.get("/all_student")
            // if(response.status === 200){

            // }else{
            //     console.log(response)
            //     return "Error"
            // }
            const result = [
                {id:1, name:"1John", birthday:"1990-04-22", city:"NewYork", state:"Maine", zip:90998},
                {id:2, name:"2David", birthday:"1988-01-04", city:"Beloa", state:"Maine", zip:92302},
                {id:3, name:"3Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                {id:4, name:"4Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:5, name:"5Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:6, name:"6Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:7, name:"7John", birthday:"1990-04-22", city:"NewYork", state:"Maine", zip:90998},
                // {id:8, name:"8David", birthday:"1988-01-04", city:"Beloa", state:"Maine", zip:92302},
                // {id:9, name:"9Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:10, name:"10Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:11, name:"11Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:12, name:"12Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:13, name:"13Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:14, name:"14John", birthday:"1990-04-22", city:"NewYork", state:"Maine", zip:90998},
                // {id:15, name:"15David", birthday:"1988-01-04", city:"Beloa", state:"Maine", zip:92302},
                // {id:16, name:"16Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:17, name:"17Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:18, name:"18Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
                // {id:19, name:"19Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
              ]
            return result
        }
        catch(exception){
            console(exception)
            return []
        }   
    }
}

export default StudentAPI