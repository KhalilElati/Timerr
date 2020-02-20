import React from 'react';
class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Name:'',
      Number:'',
      validThru:''
    }
    
  }
  
  ChangeName=(event)=>{
    const regex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
   if ((event.target.value.length < 20) && (regex.test(event.target.value))){ 
    
    this.setState({
      Name:(event.target.value).toUpperCase()
      
    })}
    // // else {
    // //   this.setState({
    // //     Name:this.state.Name.slice(0)
    // //   })
    //   event.target.value=event.target.value.slice(0,event.target.value.length-1)
    // }
  }

  spacebetween=(number)=>{
      let x= number.split('')
      for(let i=3;i<x.length;i+=4 ){
          x[i]=x[i]+' '
      }
      let z=x.join('')
      return z
  }



  ChangeNumber=(event)=>{
      const regexn=(/^[0-9]+$/)
    //   if (((this.state.Number.length==3)&&(this.state.Number.indexOf(' ')==-1))||(this.state.Number.length==8)||(this.state.Number.length==13)){
    //    event.target.value+=' '
    // }
      if (regexn.test(event.target.value)){
    this.setState({
      Number:event.target.value
    })
    // event.target.value=event.target.value.padEnd(19,'*')
       
    
    }
    // else {
    //     event.target.value=""
    //     this.setState({
    //         Number:''
    //     })
    // }
  }
  add=(num)=>{
      let a=String(num)
      let str1=a[0]+a[1]
      if(a[0]>1){
          this.setState({
              validThru:''
          })
          return''
      }
      
      if((str1>12)||(str1<1)){
          this.setState({
              validThru:''
          })
          return''
      }
      if(num.length<2){return num}
      let str2=a[2]+a[3]
      return num.slice(0,2)+"/"+num.slice(2)
    //   let x=num.split('')
    //   x[1]=x[1]+'/'
    //   let z=x.join('')
    //   return z
  }

  ChangeThru=(event)=>{
      const regexx=/^[0-9\.\-\/]+$/
      if (regexx.test(event.target.value)){
    
    this.setState({
      validThru:event.target.value
    })}
    // else{
    //     event.target.value=""
    //     this.setState({
    //         validThru:''
    //     })
    // }
    // if ((event.target.value>1)&&(event.target.value.length==1)){
   
        
    //         this.setState({
    //         validThru:''
    //         })
    //         event.target.value=""
            
    //     }
        // if ((event.target.value<13)&&(regexx.test(event.target.value))){
        //     this.setState({
        //         validThru:event.target.value
        //     })
        // }
    //     if ((event.target.value.length===3)&&(event.target.value.indexOf('/')===-1)){
    //     this.setState({
    //         validThru:this.state.validThru.slice(0,2)+'/'
    //     })
    //         event.target.value=event.target.value.slice(0,2)+'/'}
    
    // }
  }
    
//     if ((event.target.value>=2)&&(event.target.value.length==1)){this.setState({
//         validThru:''
//     })
// event.target.value=""}
//   }
  
  render(){
    return (
      <div className="big">
        <div className="Outputs">
           <p className="Company">Company Name</p> 
           <img className="pus" height="40px"src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fs4i6r5r7.stackpathcdn.com%2Fwp%2Fwp-content%2Fthemes%2Fsimoptions%2Fassets%2Fimg%2Fsim-card-bg-min.png" alt='photo'/>

          <div>
            <p>{this.spacebetween(this.state.Number.padEnd(16,'*'))}</p>
          </div>
          <div>
          <img className="master" height="100px"src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png" alt="photoo"/>
            <p className="aa">{this.add(this.state.validThru)}</p>
            
          </div>
          <div className="fok">
            <p>{this.state.Name}</p>
            
          </div>
         </div>
        <div className="Inputs">
          <div>
            <p style={{color:'red'}}>Name</p>
            <input className="nameInput" type="text" maxLength="20"  value ={this.state.Name} onChange={this.ChangeName} />
          </div>  
          <div>
            <p style={{color:'red'}}>Number</p>
            <input className="numberInput" type="text" maxLength='16' value ={this.state.Number} onChange={this.ChangeNumber}/>
          
          </div>
          <div>
            <p style={{color:'red'}}>validThru</p>
            <input className="validThruInput" type="text" maxLength="4" value ={this.state.validThru} onChange={this.ChangeThru}/>  
          </div>       
        </div>  
      </div>
    
    ) 
  }
}
export default Card