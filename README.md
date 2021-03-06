# **daily-orders**

An application that sends a csv file containing order data from a MySql  Database to a supplier via email on a 24 hour basis.


This application queries a table called orders, which contains order details in a format where one product is listed per row (i.e. an order with 3 products would occupy 3 rows). See orders.csv for example, the table structure matches this file exactly. The results of the query are then edited, so that the first row (header row) of each order is the only row that contains customer details. The remaining rows will only contain product line data.

Results from the query are written to a csv file that is then emailed to a recipient, usually the supplier(s) for the products on the order. In this case, the app is querying a table that contains orders for a specific vender, so there is only one recipient. See orders-formatted for how the CSV file should look when it sent to the supplier.

After the csv file is mailed another function runs to delete all the records from the orders table.

This app should be run once every 24 hours, as suppliers generally want to recieve order reports on a daily basis.

I used this project as an opportunity to learn some docker basics. This app was containerized and added to my container registry on GCP. Using docker image to deploy to cloud run or to a VM. 
