const conn = require("../db/conn");

module.exports = class ProductController {
  static getAllProducts(request, response) {
    try {
      const sql = `SELECT * FROM tb_produtos`;
      conn.query(sql, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        const products = data;
        // console.log(products)
        return response.render('product/home',{products});
      });
    } catch (error) {
      console.error(error);
      return response.status(500).send(error);
    }
  }

  static createProductPost(request, response) {
    try {
      if (!request.body.nome || !request.body.quantidade) {
        return response
          .status(400)
          .json({ message: "Por favor, Preencha todos os campos" });
      }

      const { nome, quantidade } = request.body;

      const sql = `INSERT INTO tb_produtos (nome, quantidade) VALUES ("${nome}", "${quantidade}")`;

      conn.query(sql, (err, data) => {
        if (err) {
          console.log(err);
        }

        const product = data;
        return response.redirect('/product')
      });
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }

  static getProduct(request, response) {
    try {
      const { id } = request.params;
      const sql = `SELECT * FROM tb_produtos WHERE id = ${id}`;

      conn.query(sql, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        const product = data[0];

        return response.render('product/update', {product});
      });
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }

  // static getProductForEdit(request, response){}

  static updateProduct(request, response) {
    try {
      const { id, nome, quantidade } = request.body;

      const sql = `UPDATE tb_produtos SET nome = '${nome}', quantidade = '${quantidade}' WHERE id = ${id}`;

      conn.query(sql, (err, data) => {
        if (err) {
          console.log(err);
          return response.send(err);
        }
        return response.redirect('/product')
      });
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  }

  static removeProduct(request, response){
    const {id} = request.params
    
    const sql = `DELETE FROM tb_produtos WHERE id = ${id}`

    conn.query(sql, (err)=>{
      if(err){
        console.log(err)
        return response.send(err)
      }

      return response.redirect('/product')
    })

  }
};
