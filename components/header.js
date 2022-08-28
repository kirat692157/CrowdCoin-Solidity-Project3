import React from "react";
import {Link} from "../routes";

export default () =>{
    return(
    <div class="ui menu" style={{marginTop : '15px'}}>
        <Link route="/">
            <a class = "item">
                <h3>CrowdCoin</h3>
            </a>
        </Link>
        <div class = "right menu">
            <Link route="/"><a class="item">Campaigns</a></Link>
            <Link route="/campaigns/new"><a class="item">+</a></Link>
            
        </div>
    </div>
)};