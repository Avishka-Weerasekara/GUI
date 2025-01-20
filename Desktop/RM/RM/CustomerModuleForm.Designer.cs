namespace RM
{
    partial class CustomerModuleForm
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(CustomerModuleForm));
            panel1 = new Panel();
            pictureBoxClose = new PictureBox();
            label1 = new Label();
            btnClear = new Button();
            btnUpdate = new Button();
            btnSave = new Button();
            txtCPhone = new TextBox();
            label5 = new Label();
            txtCName = new TextBox();
            label2 = new Label();
            lblCld = new Label();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBoxClose).BeginInit();
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
            panel1.Size = new Size(650, 41);
            panel1.TabIndex = 14;
            // 
            // pictureBoxClose
            // 
            pictureBoxClose.Image = (Image)resources.GetObject("pictureBoxClose.Image");
            pictureBoxClose.Location = new Point(619, -1);
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
            label1.Size = new Size(134, 20);
            label1.TabIndex = 0;
            label1.Text = "Customer Module";
            // 
            // btnClear
            // 
            btnClear.BackColor = Color.Red;
            btnClear.FlatAppearance.BorderSize = 0;
            btnClear.FlatStyle = FlatStyle.Flat;
            btnClear.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            btnClear.ForeColor = Color.White;
            btnClear.Location = new Point(490, 190);
            btnClear.Name = "btnClear";
            btnClear.Size = new Size(99, 45);
            btnClear.TabIndex = 25;
            btnClear.Text = "Clear";
            btnClear.UseVisualStyleBackColor = false;
            btnClear.Click += btnClear_Click;
            // 
            // btnUpdate
            // 
            btnUpdate.BackColor = Color.Gold;
            btnUpdate.FlatAppearance.BorderSize = 0;
            btnUpdate.FlatStyle = FlatStyle.Flat;
            btnUpdate.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            btnUpdate.ForeColor = Color.White;
            btnUpdate.Location = new Point(367, 190);
            btnUpdate.Name = "btnUpdate";
            btnUpdate.Size = new Size(99, 45);
            btnUpdate.TabIndex = 24;
            btnUpdate.Text = "Update";
            btnUpdate.UseVisualStyleBackColor = false;
            btnUpdate.Click += btnUpdate_Click;
            // 
            // btnSave
            // 
            btnSave.BackColor = Color.FromArgb(0, 64, 0);
            btnSave.FlatAppearance.BorderSize = 0;
            btnSave.FlatStyle = FlatStyle.Flat;
            btnSave.Font = new Font("Segoe UI", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            btnSave.ForeColor = Color.White;
            btnSave.Location = new Point(244, 190);
            btnSave.Name = "btnSave";
            btnSave.Size = new Size(99, 45);
            btnSave.TabIndex = 23;
            btnSave.Text = "Save";
            btnSave.UseVisualStyleBackColor = false;
            btnSave.Click += btnSave_Click;
            // 
            // txtCPhone
            // 
            txtCPhone.Location = new Point(119, 126);
            txtCPhone.Name = "txtCPhone";
            txtCPhone.Size = new Size(486, 27);
            txtCPhone.TabIndex = 22;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(37, 129);
            label5.Name = "label5";
            label5.Size = new Size(57, 20);
            label5.TabIndex = 21;
            label5.Text = "Phone :";
            // 
            // txtCName
            // 
            txtCName.Location = new Point(119, 76);
            txtCName.Name = "txtCName";
            txtCName.Size = new Size(486, 27);
            txtCName.TabIndex = 16;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(37, 79);
            label2.Name = "label2";
            label2.Size = new Size(56, 20);
            label2.TabIndex = 15;
            label2.Text = "Name :";
            // 
            // lblCld
            // 
            lblCld.AutoSize = true;
            lblCld.Location = new Point(50, 201);
            lblCld.Name = "lblCld";
            lblCld.Size = new Size(91, 20);
            lblCld.TabIndex = 26;
            lblCld.Text = "Customer ID";
            lblCld.Visible = false;
            // 
            // CustomerModuleForm
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(650, 275);
            Controls.Add(lblCld);
            Controls.Add(panel1);
            Controls.Add(btnClear);
            Controls.Add(btnUpdate);
            Controls.Add(btnSave);
            Controls.Add(txtCPhone);
            Controls.Add(label5);
            Controls.Add(txtCName);
            Controls.Add(label2);
            FormBorderStyle = FormBorderStyle.None;
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "CustomerModuleForm";
            StartPosition = FormStartPosition.CenterScreen;
            Text = "CustomerModuleForm";
            panel1.ResumeLayout(false);
            panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBoxClose).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Panel panel1;
        private PictureBox pictureBoxClose;
        private Label label1;
        public Button btnClear;
        public Button btnUpdate;
        public Button btnSave;
        public TextBox txtCPhone;
        private Label label5;
        public TextBox txtCName;
        private Label label2;
        public Label lblCld;
    }
}