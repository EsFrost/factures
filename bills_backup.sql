PGDMP  6                    |           bills    16.3    16.3 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    bills    DATABASE     �   CREATE DATABASE bills WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE bills;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    16399    bill    TABLE     �   CREATE TABLE public.bill (
    id character varying(255) NOT NULL,
    "dateBill" date NOT NULL,
    el_cons numeric NOT NULL,
    gaz_cons numeric NOT NULL
);
    DROP TABLE public.bill;
       public         heap    postgres    false    4            �          0    16399    bill 
   TABLE DATA                 public          postgres    false    215   �                  2606    16409    bill bill_id_key 
   CONSTRAINT     I   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_id_key UNIQUE (id);
 :   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_id_key;
       public            postgres    false    215                       2606    16411    bill bill_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.bill
    ADD CONSTRAINT bill_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.bill DROP CONSTRAINT bill_pkey;
       public            postgres    false    215            �     x���AK�0�{?�c�n��K�d)�tN-�\�u�6��)�^��feӛ'Ix���A���m^*(lU��g݅�]��2�9�}\g��м����5N��m_7;���[�Y<��p:��r�"n�s����֥}��
J�e�\اۤ����l~�>o<�O���i�]��c����gZ��ɡ������KĻ��HK�2�ed�g��Ւ���x��P^h⇦���US㮵��8##��a��DTl�������hÉ     