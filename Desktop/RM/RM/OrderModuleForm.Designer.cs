namespace RM
{
    partial class OrderModuleForm
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(OrderModuleForm));
            DataGridViewCellStyle dataGridViewCellStyle1 = new DataGridViewCellStyle();
            DataGridViewCellStyle dataGridViewCellStyle2 = new DataGridViewCellStyle();
            panel1 = new Panel();
            pictureBoxClose = new PictureBox();
            label1 = new Label();
            panel2 = new Panel();
            lblOid = new Label();
            label7 = new Label();
            txtCName = new TextBox();
            label6 = new Label();
            txtCid = new TextBox();
            label4 = new Label();
            txtSearchCust = new TextBox();
            label2 = new Label();
            dgvCustomer = new DataGridView();
            Column7 = new DataGridViewTextBoxColumn();
            Column1 = new DataGridViewTextBoxColumn();
            Column2 = new DataGridViewTextBoxColumn();
            panel3 = new Panel();
            UDQty = new NumericUpDown();
            btnClear = new Button();
            btnInsert = new Button();
            label12 = new Label();
            txtTotal = new TextBox();
            label11 = new Label();
            label10 = new Label();
            txtPrice = new TextBox();
            label9 = new Label();
            txtPName = new TextBox();
            label8 = new Label();
            txtPid = new TextBox();
            label5 = new Label();
            txtSearchProd = new TextBox();
            label3 = new Label();
            dgvProduct = new DataGridView();
            dataGridViewTextBoxColumn1 = new DataGridViewTextBoxColumn();
            dataGridViewTextBoxColumn2 = new DataGridViewTextBoxColumn();
            dataGridViewTextBoxColumn3 = new DataGridViewTextBoxColumn();
            Column3 = new DataGridViewTextBoxColumn();
            Column4 = new DataGridViewTextBoxColumn();
            Column5 = new DataGridViewTextBoxColumn();
            Column6 = new DataGridViewTextBoxColumn();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBoxClose).BeginInit();
            panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dgvCustomer).BeginInit();
            panel3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)UDQty).BeginInit();
            ((System.ComponentModel.ISupportInitialize)dgvProduct).BeginInit();
            SuspendLayout();
            // 
            // panel1
            // 
            panel1.BackColor = Color.Red;
            panel1.Controls.Add(pictureBoxClose);
            panel1.Controls.Add(label1);
            panel1.Dock = DockStyle.Top;
            panel1.Location = new Point(0, 0);
            panel1.Name = "panel1";
            panel1.Size = new Size(1026, 41);
            panel1.TabIndex = 1;
            // 
            // pictureBoxClose
            // 
            pictureBoxClose.Image = (Image)resources.GetObject("pictureBoxClose.Image");
            pictureBoxClose.Location = new Point(997, 0);
            pictureBoxClose.Name = "pictureBoxClose";
            pictureBoxClose.Size = new Size(29, 28);
            pictureBoxClose.SizeMode = PictureBoxSizeMode.Zoom;
            pictureBoxClose.TabIndex = 11;
            pictureBoxClose.TabStop = false;
            pictureBoxClose.Click += pictureBoxClose_Click;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Segoe UI", 9F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label1.ForeColor = Color.White;
            label1.Location = new Point(3, 11);
            label1.Name = "label1";
            label1.Size = new Size(106, 20);
            label1.TabIndex = 0;
            label1.Text = "Order Module";
            // 
            // panel2
            // 
            panel2.Controls.Add(lblOid);
            panel2.Controls.Add(label7);
            panel2.Controls.Add(txtCName);
            panel2.Controls.Add(label6);
            panel2.Controls.Add(txtCid);
            panel2.Controls.Add(label4);
            panel2.Controls.Add(txtSearchCust);
            panel2.Controls.Add(label2);
            panel2.Controls.Add(dgvCustomer);
            panel2.Dock = DockStyle.Left;
            panel2.Location = new Point(0, 41);
            panel2.Name = "panel2";
            panel2.Size = new Size(372, 661);
            panel2.TabIndex = 2;
            // 
            // lblOid
            // 
            lblOid.AutoSize = true;
            lblOid.Location = new Point(15, 629);
            lblOid.Name = "lblOid";
            lblOid.Size = new Size(58, 20);
            lblOid.TabIndex = 13;
            lblOid.Text = "label13";
            lblOid.Visible = false;
            // 
            // label7
            // 
            label7.AutoSize = true;
            label7.Location = new Point(12, 500);
            label7.Name = "label7";
            label7.Size = new Size(123, 20);
            label7.TabIndex = 12;
            label7.Text = "Customer Name :";
            // 
            // txtCName
            // 
            txtCName.Location = new Point(12, 533);
            txtCName.Name = "txtCName";
            txtCName.Size = new Size(348, 27);
            txtCName.TabIndex = 11;
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(9, 424);
            label6.Name = "label6";
            label6.Size = new Size(98, 20);
            label6.TabIndex = 10;
            label6.Text = "Customer ID :";
            // 
            // txtCid
            // 
            txtCid.Location = new Point(9, 457);
            txtCid.Name = "txtCid";
            txtCid.Size = new Size(351, 27);
            txtCid.TabIndex = 9;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(41, 333);
            label4.Name = "label4";
            label4.Size = new Size(60, 20);
            label4.TabIndex = 8;
            label4.Text = "Search :";
            // 
            // txtSearchCust
            // 
            txtSearchCust.Location = new Point(124, 326);
            txtSearchCust.Name = "txtSearchCust";
            txtSearchCust.Size = new Size(236, 27);
            txtSearchCust.TabIndex = 7;
            txtSearchCust.TextChanged += txtSearchCust_TextChanged;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Segoe UI", 12F, FontStyle.Bold | FontStyle.Underline, GraphicsUnit.Point, 0);
            label2.ForeColor = Color.FromArgb(0, 192, 0);
            label2.Location = new Point(3, 370);
            label2.Name = "label2";
            label2.Size = new Size(124, 28);
            label2.TabIndex = 6;
            label2.Text = "CUSTOMER ";
            // 
            // dgvCustomer
            // 
            dgvCustomer.AllowUserToAddRows = false;
            dgvCustomer.BackgroundColor = Color.White;
            dataGridViewCellStyle1.Alignment = DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle1.BackColor = Color.Navy;
            dataGridViewCellStyle1.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            dataGridViewCellStyle1.ForeColor = Color.White;
            dataGridViewCellStyle1.SelectionBackColor = Color.RoyalBlue;
            dataGridViewCellStyle1.SelectionForeColor = SystemColors.HighlightText;
            dataGridViewCellStyle1.WrapMode = DataGridViewTriState.True;
            dgvCustomer.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle1;
            dgvCustomer.ColumnHeadersHeight = 30;
            dgvCustomer.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            dgvCustomer.Columns.AddRange(new DataGridViewColumn[] { Column7, Column1, Column2 });
            dgvCustomer.Dock = DockStyle.Top;
            dgvCustomer.EnableHeadersVisualStyles = false;
            dgvCustomer.Location = new Point(0, 0);
            dgvCustomer.Name = "dgvCustomer";
            dgvCustomer.RowHeadersVisible = false;
            dgvCustomer.RowHeadersWidth = 51;
            dgvCustomer.Size = new Size(372, 309);
            dgvCustomer.TabIndex = 5;
            dgvCustomer.CellClick += dgvCustomer_CellClick;
            // 
            // Column7
            // 
            Column7.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            Column7.HeaderText = "No";
            Column7.MinimumWidth = 6;
            Column7.Name = "Column7";
            Column7.Width = 62;
            // 
            // Column1
            // 
            Column1.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            Column1.HeaderText = "Customer ID";
            Column1.MinimumWidth = 6;
            Column1.Name = "Column1";
            Column1.Width = 139;
            // 
            // Column2
            // 
            Column2.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            Column2.HeaderText = "Name";
            Column2.MinimumWidth = 6;
            Column2.Name = "Column2";
            // 
            // panel3
            // 
            panel3.Controls.Add(UDQty);
            panel3.Controls.Add(btnClear);
            panel3.Controls.Add(btnInsert);
            panel3.Controls.Add(label12);
            panel3.Controls.Add(txtTotal);
            panel3.Controls.Add(label11);
            panel3.Controls.Add(label10);
            panel3.Controls.Add(txtPrice);
            panel3.Controls.Add(label9);
            panel3.Controls.Add(txtPName);
            panel3.Controls.Add(label8);
            panel3.Controls.Add(txtPid);
            panel3.Controls.Add(label5);
            panel3.Controls.Add(txtSearchProd);
            panel3.Controls.Add(label3);
            panel3.Controls.Add(dgvProduct);
            panel3.Dock = DockStyle.Right;
            panel3.Location = new Point(385, 41);
            panel3.Name = "panel3";
            panel3.Size = new Size(641, 661);
            panel3.TabIndex = 3;
            // 
            // UDQty
            // 
            UDQty.Location = new Point(481, 471);
            UDQty.Maximum = new decimal(new int[] { 50, 0, 0, 0 });
            UDQty.Name = "UDQty";
            UDQty.Size = new Size(148, 27);
            UDQty.TabIndex = 26;
            UDQty.ValueChanged += numericUpDown1_ValueChanged;
            // 
            // btnClear
            // 
            btnClear.BackColor = Color.Red;
            btnClear.FlatAppearance.BorderSize = 0;
            btnClear.FlatStyle = FlatStyle.Flat;
            btnClear.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            btnClear.ForeColor = Color.White;
            btnClear.Location = new Point(487, 591);
            btnClear.Name = "btnClear";
            btnClear.Size = new Size(144, 45);
            btnClear.TabIndex = 25;
            btnClear.Text = "Clear";
            btnClear.UseVisualStyleBackColor = false;
            btnClear.Click += btnClear_Click;
            // 
            // btnInsert
            // 
            btnInsert.BackColor = Color.FromArgb(0, 64, 0);
            btnInsert.FlatAppearance.BorderSize = 0;
            btnInsert.FlatStyle = FlatStyle.Flat;
            btnInsert.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            btnInsert.ForeColor = Color.White;
            btnInsert.Location = new Point(323, 591);
            btnInsert.Name = "btnInsert";
            btnInsert.Size = new Size(144, 45);
            btnInsert.TabIndex = 23;
            btnInsert.Text = "Insert Order";
            btnInsert.UseVisualStyleBackColor = false;
            btnInsert.Click += btnInsert_Click;
            // 
            // label12
            // 
            label12.AutoSize = true;
            label12.Location = new Point(395, 540);
            label12.Name = "label12";
            label12.Size = new Size(49, 20);
            label12.TabIndex = 22;
            label12.Text = "Total :";
            // 
            // txtTotal
            // 
            txtTotal.Location = new Point(481, 533);
            txtTotal.Name = "txtTotal";
            txtTotal.Size = new Size(148, 27);
            txtTotal.TabIndex = 21;
            // 
            // label11
            // 
            label11.AutoSize = true;
            label11.Location = new Point(395, 478);
            label11.Name = "label11";
            label11.Size = new Size(72, 20);
            label11.TabIndex = 20;
            label11.Text = "Quantity :";
            // 
            // label10
            // 
            label10.AutoSize = true;
            label10.Location = new Point(395, 420);
            label10.Name = "label10";
            label10.Size = new Size(77, 20);
            label10.TabIndex = 18;
            label10.Text = "Price (Rs) :";
            // 
            // txtPrice
            // 
            txtPrice.Location = new Point(481, 417);
            txtPrice.Name = "txtPrice";
            txtPrice.Size = new Size(148, 27);
            txtPrice.TabIndex = 17;
            // 
            // label9
            // 
            label9.AutoSize = true;
            label9.Location = new Point(12, 500);
            label9.Name = "label9";
            label9.Size = new Size(111, 20);
            label9.TabIndex = 16;
            label9.Text = "Product Name :";
            // 
            // txtPName
            // 
            txtPName.Location = new Point(12, 533);
            txtPName.Name = "txtPName";
            txtPName.Size = new Size(232, 27);
            txtPName.TabIndex = 15;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.Location = new Point(12, 424);
            label8.Name = "label8";
            label8.Size = new Size(90, 20);
            label8.TabIndex = 14;
            label8.Text = "Product ID  :";
            // 
            // txtPid
            // 
            txtPid.Location = new Point(12, 457);
            txtPid.Name = "txtPid";
            txtPid.Size = new Size(232, 27);
            txtPid.TabIndex = 13;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(184, 333);
            label5.Name = "label5";
            label5.Size = new Size(60, 20);
            label5.TabIndex = 12;
            label5.Text = "Search :";
            // 
            // txtSearchProd
            // 
            txtSearchProd.Location = new Point(261, 326);
            txtSearchProd.Name = "txtSearchProd";
            txtSearchProd.Size = new Size(368, 27);
            txtSearchProd.TabIndex = 11;
            txtSearchProd.TextChanged += txtSearchProd_TextChanged;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Segoe UI", 12F, FontStyle.Bold | FontStyle.Underline, GraphicsUnit.Point, 0);
            label3.ForeColor = Color.FromArgb(0, 192, 0);
            label3.Location = new Point(3, 370);
            label3.Name = "label3";
            label3.Size = new Size(105, 28);
            label3.TabIndex = 10;
            label3.Text = "PRODUCT";
            // 
            // dgvProduct
            // 
            dgvProduct.AllowUserToAddRows = false;
            dgvProduct.BackgroundColor = Color.White;
            dataGridViewCellStyle2.Alignment = DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle2.BackColor = Color.Navy;
            dataGridViewCellStyle2.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            dataGridViewCellStyle2.ForeColor = Color.White;
            dataGridViewCellStyle2.SelectionBackColor = Color.RoyalBlue;
            dataGridViewCellStyle2.SelectionForeColor = SystemColors.HighlightText;
            dataGridViewCellStyle2.WrapMode = DataGridViewTriState.True;
            dgvProduct.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle2;
            dgvProduct.ColumnHeadersHeight = 30;
            dgvProduct.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            dgvProduct.Columns.AddRange(new DataGridViewColumn[] { dataGridViewTextBoxColumn1, dataGridViewTextBoxColumn2, dataGridViewTextBoxColumn3, Column3, Column4, Column5, Column6 });
            dgvProduct.Dock = DockStyle.Top;
            dgvProduct.EnableHeadersVisualStyles = false;
            dgvProduct.Location = new Point(0, 0);
            dgvProduct.Name = "dgvProduct";
            dgvProduct.RowHeadersVisible = false;
            dgvProduct.RowHeadersWidth = 51;
            dgvProduct.Size = new Size(641, 309);
            dgvProduct.TabIndex = 9;
            dgvProduct.CellClick += dgvProduct_CellClick;
            // 
            // dataGridViewTextBoxColumn1
            // 
            dataGridViewTextBoxColumn1.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            dataGridViewTextBoxColumn1.HeaderText = "No";
            dataGridViewTextBoxColumn1.MinimumWidth = 6;
            dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            dataGridViewTextBoxColumn1.Width = 62;
            // 
            // dataGridViewTextBoxColumn2
            // 
            dataGridViewTextBoxColumn2.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            dataGridViewTextBoxColumn2.HeaderText = "Product ID";
            dataGridViewTextBoxColumn2.MinimumWidth = 6;
            dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            dataGridViewTextBoxColumn2.Width = 125;
            // 
            // dataGridViewTextBoxColumn3
            // 
            dataGridViewTextBoxColumn3.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            dataGridViewTextBoxColumn3.HeaderText = "Name";
            dataGridViewTextBoxColumn3.MinimumWidth = 6;
            dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            dataGridViewTextBoxColumn3.Width = 86;
            // 
            // Column3
            // 
            Column3.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            Column3.HeaderText = "Qty";
            Column3.MinimumWidth = 6;
            Column3.Name = "Column3";
            Column3.Width = 68;
            // 
            // Column4
            // 
            Column4.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            Column4.HeaderText = "Price ($)";
            Column4.MinimumWidth = 6;
            Column4.Name = "Column4";
            Column4.Width = 105;
            // 
            // Column5
            // 
            Column5.AutoSizeMode = DataGridViewAutoSizeColumnMode.Fill;
            Column5.HeaderText = "Description";
            Column5.MinimumWidth = 6;
            Column5.Name = "Column5";
            // 
            // Column6
            // 
            Column6.AutoSizeMode = DataGridViewAutoSizeColumnMode.AllCells;
            Column6.HeaderText = "Category";
            Column6.MinimumWidth = 6;
            Column6.Name = "Column6";
            Column6.Width = 113;
            // 
            // OrderModuleForm
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.White;
            ClientSize = new Size(1026, 702);
            Controls.Add(panel3);
            Controls.Add(panel2);
            Controls.Add(panel1);
            FormBorderStyle = FormBorderStyle.None;
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "OrderModuleForm";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "OrderModuleForm";
            panel1.ResumeLayout(false);
            panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBoxClose).EndInit();
            panel2.ResumeLayout(false);
            panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)dgvCustomer).EndInit();
            panel3.ResumeLayout(false);
            panel3.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)UDQty).EndInit();
            ((System.ComponentModel.ISupportInitialize)dgvProduct).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Panel panel1;
        private PictureBox pictureBoxClose;
        private Label label1;
        private Panel panel2;
        private DataGridView dgvCustomer;
        private DataGridViewTextBoxColumn Column7;
        private DataGridViewTextBoxColumn Column1;
        private DataGridViewTextBoxColumn Column2;
        private Panel panel3;
        private DataGridView dgvProduct;
        private DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private DataGridViewTextBoxColumn Column3;
        private DataGridViewTextBoxColumn Column4;
        private DataGridViewTextBoxColumn Column5;
        private DataGridViewTextBoxColumn Column6;
        private Label label2;
        private TextBox txtSearchCust;
        private Label label3;
        private Label label4;
        private Label label5;
        private TextBox txtSearchProd;
        private Label label7;
        private TextBox txtCName;
        private Label label6;
        private Label label12;
        private TextBox txtTotal;
        private Label label11;
        private Label label10;
        private Label label9;
        private TextBox txtPName;
        private Label label8;
        public Button btnClear;
        public Button btnInsert;
        public Label lblOid;
        public TextBox txtPid;
        public TextBox txtCid;
        public TextBox txtPrice;
        public NumericUpDown UDQty;
    }
}