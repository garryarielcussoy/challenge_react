import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import Header from '../components/Header'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Masuk extends React.Component{  
      postLogin = () => {
        const namaPengguna = this.props.namaPengguna;
        const kataKunci = this.props.kataKunci
        const data = {
          username: namaPengguna,
          password: kataKunci
        };
        
        const self = this;
        axios
          .post("https://react-route.free.beeceptor.com/masuk", data)
          .then(async function (response) {
            console.log(response.data);
            if (response.data.hasOwnProperty("accKey")) {
              console.warn('masuk if');
              await store.setState({accKey: response.data.accKey, isLogin: true, name: response.data.name, email: response.data.email});
              self.props.history.push("/profile");
            // return <Redirect to={{ pathname: "/profile" }} />
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };
    
    render() {
      console.warn('cek store', this.props)
        return (
            <React.Fragment>
                <Header />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4 login-sheet'>
                            <form className='login-session' onSubmit={(e) => this.props.onSubmit(e)}>
                                <h3 className='h3-login'>LOGIN</h3>
                                <input name="namaPengguna" placeholder="Username" onChange={e => this.props.handleChange(e)}></input><br /><br />
                                <input name="kataKunci" placeholder="Password" onChange={e => this.props.handleChange(e)}></input><br /><br />
                                <button type='button' className='btn btn-primary' onClick={() => this.postLogin()}>Masuk</button>
                            </form>
                        </div>
                        <div className='col-4'></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect("namaPengguna, kataKunci, email, name, accKey, isLogin, test", actions)(withRouter(Masuk))