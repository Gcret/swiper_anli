import {Carousel} from 'antd';
import axios from 'axios';
export default class Index extends Component{
 constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
 

 <Carousel effect="fade" autoplay="true">
				  {
				  	this.state.data.map((item,i)=>{
				  		return(
				  			<div> 
				      		<img src={item.imageUrl}/>
				    	 </div>
				  		)
				  		
				  	})
				  }
 </Carousel>
 

componentDidMount(){	
	
			axios.get('http://net-music.penkuoer.com/banner').then((data)=>{
				console.log(data.data.banners)
				this.setState({data:data.data.banners})
			})
			
		}

}