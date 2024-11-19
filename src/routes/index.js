import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Tutor from '../pages/Tutor';
import Tutores from '../pages/Tutores';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Tutores} isClosed={false} />
      <MyRoute exact path="/tutor/:id/edit" component={Tutor} isClosed />
      <MyRoute exact path="/tutor/" component={Tutor} isClosed />
      <MyRoute exact path="/fotos/" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
