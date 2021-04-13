import React, { useState } from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.css';
export function Navigation() {

  return (
    <div>
            <nav>
          <ul className={styles.row}>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/pos">POS</Link>
            </li>
            <li>
              <Link to="/sales">Sales</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

