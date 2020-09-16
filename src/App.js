import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Color Picker</h3>
                            </div>
                            <div className="panel-body">
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">


                        <div className="panel panel-warning">
                            <div className="panel-heading">

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Size : 15px </h3>
                                    </div>
                                    <div className="panel-body">

                                        <button type="button" className="btn btn-success">Giam </button>
                                        <button type="button" className="btn btn-success">Tang  </button>

                                    </div>
                                </div>


                                <button type="button" className="btn btn-primary">reset</button>
                            </div>

                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <p>Color : red - Fontsize : 15px </p>
                                <div id="content">
                                    Noi Dung Setting
        </div>
                            </div>

                        </div>


                    </div>


                </div>

            </div>




        );



    }
}

export default App;


