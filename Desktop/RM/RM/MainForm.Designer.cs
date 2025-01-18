namespace RM
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainForm));
            panel1 = new Panel();
            label7 = new Label();
            label6 = new Label();
            label5 = new Label();
            label4 = new Label();
            label2 = new Label();
            btnOrder = new CustomerButton();
            btnUser = new CustomerButton();
            btnCategory = new CustomerButton();
            btnCustomer = new CustomerButton();
            btnProduct = new CustomerButton();
            label1 = new Label();
            label3 = new Label();
            panel2 = new Panel();
            panel3 = new Panel();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)btnOrder).BeginInit();
            ((System.ComponentModel.ISupportInitialize)btnUser).BeginInit();
            ((System.ComponentModel.ISupportInitialize)btnCategory).BeginInit();
            ((System.ComponentModel.ISupportInitialize)btnCustomer).BeginInit();
            ((System.ComponentModel.ISupportInitialize)btnProduct).BeginInit();
            SuspendLayout();
            // 
            // panel1
            // 
            panel1.BackColor = Color.White;
            panel1.Controls.Add(label7);
            panel1.Controls.Add(label6);
            panel1.Controls.Add(label5);
            panel1.Controls.Add(label4);
            panel1.Controls.Add(label2);
            panel1.Controls.Add(btnOrder);
            panel1.Controls.Add(btnUser);
            panel1.Controls.Add(btnCategory);
            panel1.Controls.Add(btnCustomer);
            panel1.Controls.Add(btnProduct);
            panel1.Controls.Add(label1);
            panel1.Controls.Add(label3);
            panel1.Dock = DockStyle.Top;
            panel1.Location = new Point(0, 0);
            panel1.Name = "panel1";
            panel1.Size = new Size(982, 90);
            panel1.TabIndex = 0;
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Font = new Font("Segoe UI", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label7.ForeColor = Color.Red;
            label7.Location = new Point(734, 58);
            label7.Name = "label7";
            label7.Size = new Size(65, 20);
            label7.TabIndex = 17;
            label7.Text = "ORDERS";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Font = new Font("Segoe UI", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label6.ForeColor = Color.Red;
            label6.Location = new Point(645, 58);
            label6.Name = "label6";
            label6.Size = new Size(52, 20);
            label6.TabIndex = 16;
            label6.Text = "USERS";
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Font = new Font("Segoe UI", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label5.ForeColor = Color.Red;
            label5.Location = new Point(530, 58);
            label5.Name = "label5";
            label5.Size = new Size(93, 20);
            label5.TabIndex = 15;
            label5.Text = "CATEGORIES";
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Font = new Font("Segoe UI", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label4.ForeColor = Color.Red;
            label4.Location = new Point(435, 58);
            label4.Name = "label4";
            label4.Size = new Size(92, 20);
            label4.TabIndex = 14;
            label4.Text = "CUSTOMERS";
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Segoe UI", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label2.ForeColor = Color.Red;
            label2.Location = new Point(349, 58);
            label2.Name = "label2";
            label2.Size = new Size(75, 20);
            label2.TabIndex = 0;
            label2.Text = "PRODUCT";
            // 
            // btnOrder
            // 
            btnOrder.Image = (Image)resources.GetObject("btnOrder.Image");
            btnOrder.ImageHover = (Image)resources.GetObject("btnOrder.ImageHover");
            btnOrder.ImageNormal = (Image)resources.GetObject("btnOrder.ImageNormal");
            btnOrder.Location = new Point(747, 12);
            btnOrder.Name = "btnOrder";
            btnOrder.Size = new Size(31, 37);
            btnOrder.SizeMode = PictureBoxSizeMode.Zoom;
            btnOrder.TabIndex = 13;
            btnOrder.TabStop = false;
            // 
            // btnUser
            // 
            btnUser.Image = (Image)resources.GetObject("btnUser.Image");
            btnUser.ImageHover = (Image)resources.GetObject("btnUser.ImageHover");
            btnUser.ImageNormal = (Image)resources.GetObject("btnUser.ImageNormal");
            btnUser.Location = new Point(652, 12);
            btnUser.Name = "btnUser";
            btnUser.Size = new Size(31, 37);
            btnUser.SizeMode = PictureBoxSizeMode.Zoom;
            btnUser.TabIndex = 12;
            btnUser.TabStop = false;
            btnUser.Click += btnUser_Click;
            // 
            // btnCategory
            // 
            btnCategory.Image = (Image)resources.GetObject("btnCategory.Image");
            btnCategory.ImageHover = (Image)resources.GetObject("btnCategory.ImageHover");
            btnCategory.ImageNormal = (Image)resources.GetObject("btnCategory.ImageNormal");
            btnCategory.Location = new Point(557, 12);
            btnCategory.Name = "btnCategory";
            btnCategory.Size = new Size(31, 37);
            btnCategory.SizeMode = PictureBoxSizeMode.Zoom;
            btnCategory.TabIndex = 11;
            btnCategory.TabStop = false;
            btnCategory.Click += btnCategory_Click;
            // 
            // btnCustomer
            // 
            btnCustomer.Image = (Image)resources.GetObject("btnCustomer.Image");
            btnCustomer.ImageHover = (Image)resources.GetObject("btnCustomer.ImageHover");
            btnCustomer.ImageNormal = (Image)resources.GetObject("btnCustomer.ImageNormal");
            btnCustomer.Location = new Point(462, 12);
            btnCustomer.Name = "btnCustomer";
            btnCustomer.Size = new Size(31, 37);
            btnCustomer.SizeMode = PictureBoxSizeMode.Zoom;
            btnCustomer.TabIndex = 10;
            btnCustomer.TabStop = false;
            btnCustomer.Click += btnCustomer_Click;
            // 
            // btnProduct
            // 
            btnProduct.Image = (Image)resources.GetObject("btnProduct.Image");
            btnProduct.ImageHover = (Image)resources.GetObject("btnProduct.ImageHover");
            btnProduct.ImageNormal = (Image)resources.GetObject("btnProduct.ImageNormal");
            btnProduct.Location = new Point(367, 12);
            btnProduct.Name = "btnProduct";
            btnProduct.Size = new Size(31, 37);
            btnProduct.SizeMode = PictureBoxSizeMode.Zoom;
            btnProduct.TabIndex = 0;
            btnProduct.TabStop = false;
            btnProduct.Click += btnProduct_Click;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Broadway", 24F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label1.ForeColor = Color.Red;
            label1.Location = new Point(0, 9);
            label1.Name = "label1";
            label1.Size = new Size(264, 46);
            label1.TabIndex = 9;
            label1.Text = "Bliss n Bite";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Segoe UI", 10.8F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label3.ForeColor = Color.Red;
            label3.Location = new Point(0, 55);
            label3.Name = "label3";
            label3.Size = new Size(326, 25);
            label3.TabIndex = 8;
            label3.Text = "INVENTORY MANAGEMENT SYSTEM";
            // 
            // panel2
            // 
            panel2.BackColor = Color.Red;
            panel2.Dock = DockStyle.Bottom;
            panel2.Location = new Point(0, 577);
            panel2.Name = "panel2";
            panel2.Size = new Size(982, 26);
            panel2.TabIndex = 1;
            // 
            // panel3
            // 
            panel3.Dock = DockStyle.Fill;
            panel3.Location = new Point(0, 90);
            panel3.Name = "panel3";
            panel3.Size = new Size(982, 487);
            panel3.TabIndex = 2;
            // 
            // MainForm
            // 
            AutoScaleDimensions = new SizeF(9F, 23F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(982, 603);
            Controls.Add(panel3);
            Controls.Add(panel2);
            Controls.Add(panel1);
            Font = new Font("Segoe UI", 10.2F, FontStyle.Regular, GraphicsUnit.Point, 0);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "MainForm";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "MainForm";
            panel1.ResumeLayout(false);
            panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)btnOrder).EndInit();
            ((System.ComponentModel.ISupportInitialize)btnUser).EndInit();
            ((System.ComponentModel.ISupportInitialize)btnCategory).EndInit();
            ((System.ComponentModel.ISupportInitialize)btnCustomer).EndInit();
            ((System.ComponentModel.ISupportInitialize)btnProduct).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Panel panel1;
        private Panel panel2;
        private Panel panel3;
        private Label label1;
        private Label label3;
        private CustomerButton btnProduct;
        private Label label2;
        private CustomerButton btnOrder;
        private CustomerButton btnUser;
        private CustomerButton btnCategory;
        private CustomerButton btnCustomer;
        private Label label7;
        private Label label6;
        private Label label5;
        private Label label4;

        




        }
    }