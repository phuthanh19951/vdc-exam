import express from 'express';

export abstract class BaseRoute{
  protected app: express.Application;
  protected name: string;

  constructor(app: express.Application, name: string){
    this.app = app;
    this.name = name;
  }

  getName(): string{
    return this.name;
  }

  abstract initRoutes(): any;
}