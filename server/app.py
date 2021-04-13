from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api, reqparse

from donuts import getDonuts, updateDonut, deleteDonut
from orders import createOrder, getOrders, refundOrder

app = Flask(__name__)
CORS(app, support_credentials=True)
api = Api(app)


class DonutAPI(Resource):
    def delete(self, id=0):
        response =  deleteDonut(request.data)
        return {'data': response}, 200  # return data and 200 OK code

    def post(self,id=0):
        response =  updateDonut(request.data)
        return {'data': response}, 200  # return data and 200 OK code

    def get(self,id=0):
        return {'data': id}, 200  # return data and 200 OK code
    pass
class DonutsAPI(Resource):
    def get(self):
        response =  getDonuts()
        return {'data': response}, 200  # return data and 200 OK code
    pass
class OrdersAPI(Resource):    
    def get(self):
        response = getOrders()
        return {'data': response}, 200  # return data and 200 OK code
    
    pass
class RefundAPI(Resource):
    def post(self, id=0):

        response =  refundOrder(id)
        return {'data': response}, 200  # return data and 200 OK code
    pass
class OrderAPI(Resource):
    def post(self, id=0):
        print('pppppppppp')
        print(request.data)
        response =  createOrder(request.data)
        return {'data': response}, 200  # return data and 200 OK code
    
    pass
    
    
api.add_resource(DonutAPI, '/donut','/donut/<id>')  # '/Fruits entry point
api.add_resource(DonutsAPI, '/donuts')
api.add_resource(RefundAPI, '/refund', '/refund/<id>')
api.add_resource(OrderAPI, '/order')
api.add_resource(OrdersAPI, '/orders')

if __name__ == '__main__':
    app.run()  # run our Flask app